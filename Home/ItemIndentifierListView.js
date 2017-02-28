'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native'
import Row from './Row'
import ArticleView from '../Article/ArticleView'
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
    return (
      <Row
        index={rowID}
        identifier={rowData}
        onPress={(item) => {
          this.props.navigator.push({
            title: item.title,
            component: ArticleView,
            passProps: {
              item: item
            }
          })
        }}
      />
    )
  }

  // this seems wrong/ugly...
  componentWillReceiveProps(nextProps) {
    if (nextProps.url != this.state.url) {
      this.setState({
        url: nextProps.url,
        dataSource: null
      })
    }
  }

  componentDidMount() {
    this._fetchIdentifiersForURL()
  }

  componentDidUpdate() {
    this._fetchIdentifiersForURL()
  }

  render() {
    if (this.state.dataSource !== null) {
      return <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
  }

  _fetchIdentifiersForURL() {
    if (this.state.dataSource === null) {
      fetch(this.state.url + ".json")
      .then(response => response.json())
      .then(identifiers => {
        var dataSource = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1.id != r2.id
        });
        this.setState({
          dataSource: dataSource.cloneWithRows(identifiers)
        })
      })
      .catch(error => {
        console.log(error)
      });
    }
  };
}

module.exports = ItemIndentifierListView;
