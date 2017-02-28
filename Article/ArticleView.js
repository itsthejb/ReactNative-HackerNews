'use strict'

import React, { Component } from 'react'
import {
  WebView
} from 'react-native'

export default class Article extends Component {
  render() {
    return <WebView source={{
      uri: this.props.item.url
    }}/>
  }
}
