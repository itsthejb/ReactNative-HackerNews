'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
const ReactNative = require('react-native');

class HomeResults extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1.id != r2.id
      });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.results)
    };
  }

  render() {
    console.log(this.props.results);
    return null;
  }
}

module.exports = HomeResults;

// const baseURL = "https://hacker-news.firebaseio.com/v0/";
// const styles = StyleSheet.create({
//   text: {
//     color: 'black',
//     backgroundColor: 'blue',
//     fontSize: 30,
//     margin: 80
//   }
// });
//
// class Home extends Component {
//
//   render() {
//     if (!this.state.hasLoaded) {
//       this._fetchTopStories();
//       return <ActivityIndicator color="blue" size='large'/>
//     } else {
//       return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;
//     }
//   };
//
//   _fetchTopStories() {
//     fetch(baseURL + "topstories.json")
//       .then(response => response.json())
//       .then(json => this._fetchItems(json))
//       .catch(error => console.log(error));
//   };
//
//   _fetchItems(topStoryIDs) {
//     var results = [];
//     var promises = [];
//
//     for (var i = 0; i < 5; ++i) {
//       var index = i;
//       var id = topStoryIDs[i];
//       var url = baseURL + "item/" + id + ".json";
//
//       var promise = fetch(url)
//       .then(response => response.json())
//       .then(json => {
//         results.push(json);
//       })
//       .catch(error => console.log(error));
//
//       promises.push(promise);
//     }
//
//     Promise.all(promises).then(values => {
//       this.setState({
//         hasLoaded: true,
//         results: results
//       });
//     });
//   };
// }
//
// module.exports = Home;
