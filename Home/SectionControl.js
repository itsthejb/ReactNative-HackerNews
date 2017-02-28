'use strict'

import React, { Component } from 'react'
import { SegmentedControlIOS } from 'react-native'
import HackerNews from '../Shared/HackerNews'

class SectionControl extends Component {
  render() {
    return (
      <SegmentedControlIOS
        values={HackerNews.sections}
        selectedIndex={this.props.selectedIndex}
        onChange={(event) => {
          this._didChange(event.nativeEvent.selectedSegmentIndex)
        }}
      />
    )
  }

  _didChange(index) {
    this.props.onChange(index)
  }

  componentWillMount() {
    // use initialIndex
    this.props.onChange(this.props.initialIndex)
  }
}

module.exports = SectionControl
