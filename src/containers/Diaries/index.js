import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import DiaryActions from '@/actions/Diary'
import UserDiaryActions from '@/actions/UserDiaries'

import DiariesComponent from '@/components/Diaries'
import DiarySearchPopup from '@/components/Diaries/Popups/DiarySearchPopup'

@inject('authStore', 'diaryStore')
@observer
export default class DiariesContainer extends Component {
  state = {
    diaries: null,
    isShowDiarySearchPopup: false,
    step: 1,
    diaryId: '',
    diary: null,
    diaryPw: '',
    isJoinDiary: false,

    // page
    page: 1,
    pageSize: 10,
    count: 0,
    numberOfPages: 0
  }

  async componentWillMount() {
    await this.getUserDiaries()
  }

  async getUserDiaries() {
    const { page, pageSize } = this.state

    try {
      const result = await UserDiaryActions.getUserDiaries({ page, pageSize })
      this.setState({ count: result.count, diaries: result.rows })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
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

  goToStep = step => {
    this.setState({
      step
    })
  }

  async joinDiary() {
    const { diaryId, diaryPw } = this.state

    try {
      const result = await DiaryActions.joinDiary({ diaryId, diaryPw })

      this.props.diaryStore.setId(result.id)
      this.props.diaryStore.setIsValidEnter(true)
      this.hideDiarySearchPopup()
      this.props.history.push(`/diaries/${result.id}`)
    } catch (err) {
      alert(err.errorMessage || err.message)
      this.setState({
        diaryPw: ''
      })
    }
  }

  render() {
    return (
      this.state.diaries && (
        <React.Fragment>
          <DiariesComponent
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
    )
  }
}
