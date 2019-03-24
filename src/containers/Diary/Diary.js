import React, { Component } from 'react'

import DiaryActions from '@/actions/Diary'

import DiaryComponent from '@/components/Diary/Diary'
import DiarySearchPopup from '@/components/Diary/Popups/DiarySearchPopup'

export default class DiaryContainer extends Component {
  state = {
    isShowDiarySearchPopup: false,
    step: 1,
    diaryId: '',
    diaryPw: '',
    diary: null,
    isJoinDiary: false
  }

  openDiarySearchPopup = () => {
    this.setState({
      isShowDiarySearchPopup: true
    })
  }

  hideDiarySearchPopup = () => {
    this.setState({
      isShowDiarySearchPopup: false,
      step: 1,
      diaryId: '',
      diary: null
    })
  }

  handleChange = e => {
    const state = { ...this.state }

    switch (e.target.name) {
      default:
        state[e.target.name] = e.target.value
        break
    }

    this.setState(state)
  }

  async searchDiaryById() {
    const diaryId = this.state.diaryId
    try {
      const diary = await DiaryActions.searchDiaryById({ diaryId })

      if (diary) {
        this.goToStep(2)
        this.setState({ diary })
      }
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  async joinDiary() {
    const { diaryId, diaryPw } = this.state

    try {
      await DiaryActions.joinDiary({ diaryId, diaryPw })
    } catch (err) {
      alert(err.errorMessage || err.message)
      this.setState({
        diaryPw: ''
      })
    }
  }

  goToStep = step => {
    this.setState({
      step
    })
  }

  render() {
    return (
      <React.Fragment>
        <DiaryComponent
          state={this.state}
          openDiarySearchPopup={this.openDiarySearchPopup}
        />

        {this.state.isShowDiarySearchPopup && (
          <DiarySearchPopup
            state={this.state}
            hideDiarySearchPopup={this.hideDiarySearchPopup}
            handleChange={this.handleChange}
            searchDiaryById={this.searchDiaryById.bind(this)}
            goToStep={this.goToStep}
            joinDiary={this.joinDiary.bind(this)}
          />
        )}
      </React.Fragment>
    )
  }
}
