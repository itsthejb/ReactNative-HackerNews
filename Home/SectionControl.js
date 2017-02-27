'use strict'

import React, { Component } from 'react'
import { SegmentedControlIOS } from 'react-native'
const HackerNews = require('../Shared/HackerNews');

class SectionControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSegmentIndex: 0
    };
  }

  render() {
    return (
      <SegmentedControlIOS
        values={HackerNews.sections}
        selectedIndex={this.state.selectedSegmentIndex}
        onChange={(event) => {
          var index = event.nativeEvent.selectedSegmentIndex
          this.setState({selectedSegmentIndex: index});
          this._callBackWithSectionIndex(index)
        }}
      />
    )
  }

  componentWillMount() {
    this._callBackWithSectionIndex(this.state.selectedSegmentIndex)
  }

  _callBackWithSectionIndex(index) {
    this.props.onChange(HackerNews.URLForSectionIndex(index))
  }
}

module.exports = SectionControl
