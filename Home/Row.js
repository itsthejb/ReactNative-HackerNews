'use string';

import React, { Component } from 'react';
import Request from 'superagent'
import HackerNews from '../Shared/HackerNews'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  Text
} from 'react-native'

const Styles = StyleSheet.create({
  text: {
    // color: 'black',
    // backgroundColor: 'blue',
    // fontSize: 30,
    // margin: 80
  },
  container: {
    minHeight: 44
  }
});

class Row extends Component {
  constructor(props) {
    super(props)
    this.state = { item: null }
  }

  render() {
    if (this.state.item) {
      return (
        <TouchableHighlight
          style={Styles.container}
          underlayColor='#f1c40f'>
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

  componentWillUnmount() {
    if (this.request !== null) {
      this.request.abort()
    }
  }

  _fetchItem() {
    this.request = Request
    .get(HackerNews.baseURL + "item/" + this.props.identifier + ".json")
    // .accept('json')
    .end((err, res) => {
      this.setState({item: res.body})
      this.request = null
    });
  }
}

module.exports = Row;
