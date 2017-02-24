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
  NavigatorIOS,
  Text,
  View
} from 'react-native';

const home = require('./Home');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class HackerNews extends Component {
  render() {
    <NavigatorIOS
      style={styles.container}
      initailRoute={{
      title: 'HackerNews',
      component: home
    }}/>
  }
}

AppRegistry.registerComponent('HackerNews', () => HackerNews);
