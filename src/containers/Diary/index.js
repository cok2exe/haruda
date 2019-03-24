import React, { Component } from 'react'
import DiaryMainComponent from '@/components/Diary'

export default class DiaryContainer extends Component {
  state = {
    selectedDiaryTab: 'diary'
  }

  selectDiaryTab = tab => {
    this.setState({
      selectedDiaryTab: tab
    })
  }

  render() {
    return (
      <DiaryMainComponent
        state={this.state}
        selectDiaryTab={this.selectDiaryTab}
      />
    )
  }
}
