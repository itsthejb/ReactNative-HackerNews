'use strict';

import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var ReactNative = require('react-native');
var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'blue',
    fontSize: 30,
    margin: 80
  }
});

class Home extends Component {
  render() {
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;

    // return (
    //   <View>
    //     <Text style={styles.text}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.text}>
    //       To get started, edit index.ios.js
    //     </Text>
    //     <Text style={styles.text}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+D or shake for dev menu
    //     </Text>
    //   </View>
    // );
  }
}

module.exports = Home;
