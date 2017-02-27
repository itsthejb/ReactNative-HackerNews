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
        onChange={(event) => {
          this.props.onChange(event.nativeEvent.selectedSegmentIndex)
        }}
      />
    )
  }

  // componentWillMount() {
  //   this.props.onChange(HackerNews.URLForSectionIndex(this.props.selectedIndex))
  // }
}

module.exports = SectionControl
