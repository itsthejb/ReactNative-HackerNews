'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native'
import Row from './Row'
import {
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ItemIndentifierListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      dataSource: null
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (<Row identifier={rowData}/>)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url != this.state.url) {
      this.setState({
        url: nextProps.url,
        dataSource: null
      })
    }
  }

  render() {
    if (this.state.dataSource !== null) {
      return <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
    } else {
      this._fetchIdentifiersForURL(this.props.url)
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
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
