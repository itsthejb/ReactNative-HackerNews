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
const Row = require('./Row');

class ItemIndentifierListView extends Component {
  constructor(props) {
    super(props);
    this.state = {dataSource: null};
  }

  renderRow(rowData, sectionID, rowID) {
    return (<Row identifier={rowData}/>)
  }

  render() {
    if (this.state.dataSource !== null) {
      return <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
  }

  componentWillMount() {
    this._fetchIdentifiersForURL(this.props.url)
  }

  _fetchIdentifiersForURL(url) {
    fetch(url + ".json")
      .then(response => response.json())
      .then(identifiers => {
        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.id != r2.id
          });
        this.setState({
          dataSource: dataSource.cloneWithRows(identifiers)
        })
      })
      .catch(error => console.log(error));
  };
}

module.exports = ItemIndentifierListView;
