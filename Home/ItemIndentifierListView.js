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

class ItemIndentifierListView extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1.id != r2.id
      });
    this.state = {
      itemCache: {},
      dataSource: dataSource.cloneWithRows(this.props.results),
    };
  }

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
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor='#f1c40f'>
        <View>
          <Text>{rowData}</Text>
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

module.exports = ItemIndentifierListView;
