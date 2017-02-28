'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native'
import ArticleCell from './ArticleCell'
import ArticleView from './ArticleView'
import {
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ArticleCellIdentifierListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      dataSource: null
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <ArticleCell
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

  renderSeparator(sectionID, rowID, adjacentHighlighted) {
    return <View>
      <View key={rowID} style={{
        backgroundColor: 'blue',
        paddingLeft: 50,
        height: 1
      }}/>
    </View>
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
        renderSeparator={this.renderSeparator.bind(this)}
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

module.exports = ArticleCellIdentifierListView;
