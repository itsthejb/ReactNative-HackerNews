'use strict'

import React, { Component } from 'react'
import { SegmentedControlIOS } from ''

class SectionControl extends Component {
  render() {
    return (
      <SegmentedControlIOS
        values={['One', 'Two']}
        selectedIndex={this.state.selectedIndex}
        onChange={(event) => {
          this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
        }}
      />
    )
  }
}

module.exports = SectionControl
