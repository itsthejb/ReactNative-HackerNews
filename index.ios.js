/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

const ReactNative = require('react-native');
const home = require('./Home');
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
          component: home
        }}/>
      );
    }
}

AppRegistry.registerComponent('HackerNews', () => HackerNews);
