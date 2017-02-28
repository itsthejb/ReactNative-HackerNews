'use string';

import React, { Component } from 'react';
import Request from 'superagent'
import HackerNews from '../Shared/HackerNews'
import Moment from 'moment'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  Text
} from 'react-native'

const Styles = StyleSheet.create({
  title: {
    // color: 'black',
    // backgroundColor: 'blue',
    // fontSize: 30,
    // margin: 80
  },
  subtitle: {
    // numberOfLines: 1,
    // ellipsizeMode: 'tail'
  },
  container: {
    minHeight: 44
  },
  contentView: {
    padding: 8
  }
});

class ArticleCell extends Component {
  constructor(props) {
    super(props)
    this.state = { item: null }
  }

  _onPress() {
    if (this.state.item !== null) {
      this.props.onPress(this.state.item)
    }
  }

  render() {
    if (this.state.item) {
      return <ArticleContentView
        item={this.state.item}
        onPress={this._onPress.bind(this)}
      />
    } else {
      this._fetchItem()
      return <ActivityIndicator size='small'/>;
    }
  }

  componentWillUnmount() {
    if (this.request !== null) {
      this.request.abort()
      this.request = null
    }
  }

  _fetchItem() {
    this.request = Request
    .get(HackerNews.baseURL + "item/" + this.props.identifier + ".json")
    .end((err, res) => {
      this.setState({item: res.body})
      this.request = null
    });
  }
}

class ArticleContentView extends Component {
  render() {
    var item = this.props.item

    return (
      <TouchableHighlight
        style={Styles.container}
        onPress={this.props.onPress.bind(this)}
        underlayColor='#f1c40f'>

        <View style={{padding: 8, flexDirection: "column"}}>
          <Text style={Styles.title}>{item.title}</Text>

          <View style={{flexDirection: "row"}}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={Styles.subtitle}>{item.by}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={Styles.subtitle}>{
              Moment(item.time, "X").fromNow()
            }</Text>
          </View>

          <Text numberOfLines={1} ellipsizeMode='tail' style={Styles.subtitle}>{item.url}</Text>
        </View>

      </TouchableHighlight>
    )
  }
}

module.exports = ArticleCell
