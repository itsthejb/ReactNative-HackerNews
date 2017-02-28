'use strict'

import React, { Component } from 'react'
import FlexActivityView from '../Shared/FlexActivityView'
import {
  WebView
} from 'react-native'

export default class ArticleView extends Component {
  render() {
    return <WebView
      startInLoadingState={true}
      renderLoading={() => <FlexActivityView/>}
      source={{uri: this.props.item.url}}
    />
  }
}
