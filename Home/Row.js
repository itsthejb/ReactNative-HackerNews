'use string';

import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text
} from 'react-native';

class Row extends Component {
  render() {
    return (
      <TouchableHighlight underlayColor='#f1c40f'>
        <View>
          <Text>{this.props.identifier}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  _fetchItem(id) {
    fetch(baseURL + "item/" + id + ".json")
    .then(response => response.json())
    .then(json => {
      var ds = this.state.dataSource.cloneWithRows
      results.push(json);
    })
    .catch(error => console.log(error));
  }


}

module.exports = Row;
