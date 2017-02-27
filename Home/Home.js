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
const SectionControl = require('./SectionControl');

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
    super(props)
    this.state = {
      selectedIndex: null
    }
  }

  render() {
    var sectionControl = (
      <SectionControl
        selectedIndex={this.state.selectedIndex}
        onChange={(index) => {this.setState({selectedIndex: index})}
      }/>
    )

    var child = null
    if (this.state.selectedIndex) {
      child = <ItemIndentifierListView stye={Styles} results={this.state.results} />;
    }

    return (
      <View style={Styles.container}>
        {sectionControl}
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
