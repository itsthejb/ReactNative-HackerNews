'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';

const ReactNative = require('react-native');
const HomeResults = require('./HomeResults');

const baseURL = "https://hacker-news.firebaseio.com/v0/";
const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'blue',
    fontSize: 30,
    margin: 80
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      hasLoaded: false
    };
  }

  render() {
    if (!this.state.hasLoaded) {
      this._fetchTopStories();
      return <ActivityIndicator color="blue" size='large'/>
    } else {
      return <HomeResults results={this.state.results} />;
    }
  };

  _fetchTopStories() {
    fetch(baseURL + "topstories.json")
      .then(response => response.json())
      .then(json => this._fetchItems(json))
      .catch(error => console.log(error));
  };

  _fetchItems(topStoryIDs) {
    var results = [];
    var promises = [];

    for (var i = 0; i < 5; ++i) {
      var index = i;
      var id = topStoryIDs[i];
      var url = baseURL + "item/" + id + ".json";

      var promise = fetch(url)
      .then(response => response.json())
      .then(json => {
        results.push(json);
      })
      .catch(error => console.log(error));

      promises.push(promise);
    }

    Promise.all(promises).then(values => {
      this.setState({
        hasLoaded: true,
        results: results
      });
    });
  };
}

module.exports = Home;
