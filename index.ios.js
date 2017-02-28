/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native'
import Home from './Home/Home'
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

var styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class HackerNews extends Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'HackerNews',
          component: Home
        }}/>
      );
    }
}

AppRegistry.registerComponent('HackerNews', () => HackerNews);
