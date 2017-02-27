'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';

const ReactNative = require('react-native');
const HackerNews = require('../Shared/HackerNews');
const ItemIndentifierListView = require('./ItemIndentifierListView');

const Styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'blue',
    fontSize: 30,
    margin: 80
  },
  container: {
    paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight,
    flex: 1
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
    var child = null;

    if (!this.state.hasLoaded) {
      this._fetchTopStories();
      child = <ActivityIndicator size='large'/>;
    } else {
      child = <ItemIndentifierListView stye={Styles} results={this.state.results} />;
    }

    return (
      <View style={Styles.container}>
        {child}
      </View>
    )
  };

  _fetchTopStories() {
    fetch(HackerNews.baseURL + "topstories.json")
      .then(response => response.json())
      .then(json => {
        this.setState({
          hasLoaded: true,
          results: json
        })
      })
      .catch(error => console.log(error));
  };
}

const BaseURL = "https://hacker-news.firebaseio.com/v0/";
module.exports = Home;
