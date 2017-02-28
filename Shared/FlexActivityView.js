'use string'

import React, { Component } from 'react'
import {
  View, ActivityIndicator
} from 'react-native'

export default class FlexActivityView extends Component {
  render() {
    return <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  }
}
