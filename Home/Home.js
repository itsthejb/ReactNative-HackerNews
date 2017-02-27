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
        initialIndex={2}
        selectedIndex={this.state.selectedIndex}
        onChange={(index) => {
          this.setState({selectedIndex: index})
        }
      }/>
    )

    var child = null
    if (this.state.selectedIndex !== null) {
      var url = HackerNews.URLForSectionIndex(this.state.selectedIndex)
      child = <ItemIndentifierListView stye={Styles} url={url}/>
    }

    return (
      <View style={Styles.container}>
        {sectionControl}
        {child}
      </View>
    )
  };
}

const BaseURL = "https://hacker-news.firebaseio.com/v0/";
module.exports = Home;
