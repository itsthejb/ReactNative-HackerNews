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
    fontSize: 14,
    paddingVertical: 4
  },
  subtitle: {
    fontSize: 10,
    color: "gray",
    paddingVertical: 4
  },
  subtitlePad: {
    fontSize: 10,
    color: "gray",
    paddingVertical: 4,
    paddingRight: 8
  },
  container: {
    minHeight: 44
  },
  contentView: {
    paddingHorizontal: 8,
    paddingTop: 4,
    paddingBottom: 4
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
      return <View style={{height: 66, justifyContent: "center"}}>
        <ActivityIndicator size='small'/>
      </View>
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
        activeOpacity={0.5}
        style={Styles.container}
        onPress={this.props.onPress.bind(this)}
        underlayColor={0x0000001A}>

        <View style={Styles.contentView}>
          <Text style={Styles.title}>{item.title}</Text>

          <View style={{flexDirection: "row"}}>
            <Text numberOfLines={1} style={[Styles.subtitle, Styles.subtitlePad]}>{item.by}</Text>
            <Text numberOfLines={1} style={Styles.subtitle}>{
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
