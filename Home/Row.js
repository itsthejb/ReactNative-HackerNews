'use string';

import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  TouchableHighlight,
  Text
} from 'react-native';

const HackerNews = require('../Shared/HackerNews');

// https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html
class Row extends Component {
  constructor(props) {
    super(props)
    this.state = { item: null }
  }

  render() {
    if (this.state.item) {
      return (
        <TouchableHighlight underlayColor='#f1c40f'>
          <View>
            <Text>{this.state.item.title}</Text>
          </View>
        </TouchableHighlight>
      )
    } else {
      this._fetchItem()
      return <ActivityIndicator size='small'/>;
    }
  }

  _fetchItem() {
    this.promise =
    fetch(HackerNews.baseURL + "item/" + this.props.identifier + ".json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        item: json
      })
    })
    .catch(error => console.log(error));
  }
}

module.exports = Row;
