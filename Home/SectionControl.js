'use strict'

import React, { Component } from 'react'
import { SegmentedControlIOS } from 'react-native'
const HackerNews = require('../Shared/HackerNews');

class SectionControl extends Component {
  render() {
    return (
      <SegmentedControlIOS
        values={HackerNews.sections}
        selectedIndex={this.props.selectedIndex}
        onChange={this.props.onChange}
      />
    )
  }

  // componentWillMount() {
  //   this._callBackWithSectionIndex(this.state.selectedSegmentIndex)
  // }
  //
  // _callBackWithSectionIndex(index) {
  //   this.props.onChange(HackerNews.URLForSectionIndex(index))
  // }
}

module.exports = SectionControl
