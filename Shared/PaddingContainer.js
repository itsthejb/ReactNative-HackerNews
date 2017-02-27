'use strict';

import React, { Component } from 'react';
import { View, Navigator, Text } from 'react-native';

class PaddingContainer extends Component {
  render () {
    return (
      <View style={
        {
          paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight,
          flex: 1
        }
      }>{this.props.child}</View>
    )
  }
}

module.exports = PaddingContainer;
