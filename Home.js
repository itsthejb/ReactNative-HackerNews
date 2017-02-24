'use strict';

import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
const ReactNative = require('react-native');

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
  render() {
    this._fetchTopStories();
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;
  }

  _fetchTopStories() {
    fetch(baseURL + "topstories.json")
      .then(response => response.json())
      .then(json => this._fetchItems(json))
      .catch(error => console.log(error));
  };

  _fetchItems(topStoryIDs) {
    var results = new Map();
    var promises = [];

    for (var i = 0; i < 5; ++i) {
      var id = topStoryIDs[i];
      var url = baseURL + "item/" + id + ".json";

      var promise = fetch(url)
      .then(response => response.json())
      .then(json => {
        results.set(i, json);
      })
      .catch(error => console.log(error));

      promises.push(promise);
    }

    Promise.all(promises).then(values => {
      this._allItemsFetched(results);
    });
  };

  _allItemsFetched(results) {
    console.log(results);
  };
}

module.exports = Home;
