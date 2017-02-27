'use strict';

import React, { Component } from 'react';
import {
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
const ReactNative = require('react-native');

class HomeResults extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1.id != r2.id
      });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.results)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor='#f1c40f'>
        <View>
          <Text>{rowData.id}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)} />
  }
}

module.exports = HomeResults;
