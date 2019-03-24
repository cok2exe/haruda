import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import UserDiaryActions from '@/actions/UserDiaries'

import DiaryMainComponent from '@/components/Diary'

@inject('authStore', 'diaryStore')
@observer
export default class DiaryContainer extends Component {
  state = {
    selectedDiaryTab: 'diary'
  }

  async componentWillMount() {
    const validInfo = this.props.diaryStore.validInfo
    if (this.props.authStore.getUser) {
      const userDiaryResult = await this.validUserDiary()
      if (userDiaryResult) {
        if (!userDiaryResult.isUserDiary) {
          // 해당 다이어리에 최초 진입하는 유저(마이 리스트에 추가되어있지 않은 경우)
          if (
            validInfo.id === +this.props.match.params.id &&
            validInfo.isValidEnter
          ) {
            await this.createUserDiary()
          } else {
            alert('해당 다이어리의 권한이 없습니다ㅠㅠ')
            this.props.history.push('/')
          }
        }
      }
    } else {
      if (
        !(
          validInfo.id === +this.props.match.params.id && validInfo.isValidEnter
        )
      ) {
        alert('해당 다이어리의 권한이 없습니다ㅠㅠ')
        this.props.history.push('/')
      }
    }
  }

  async validUserDiary() {
    try {
      const result = await UserDiaryActions.validUserDiary({
        DiaryId: this.props.match.params.id
      })

      return result
    } catch (err) {
      alert(err.errorMessage || err.message)
      this.props.history.push('/')
      return null
    }
  }

  async createUserDiary() {
    try {
      await UserDiaryActions.createUserDiary({
        DiaryId: this.props.match.params.id
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
      this.props.history.push('/')
    }
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
