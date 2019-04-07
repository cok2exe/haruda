import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import DiaryScheduleActions from '@/actions/DiarySchedules'

import DiaryScheduleComponent from '@/components/Diary/Schedule'

@inject('authStore')
@observer
export default class ScheduleContainer extends Component {
  state = {
    schedules: []
  }

  async componentDidMount() {
    this.getDiarySchedules()
  }

  getDiarySchedules = async () => {
    try {
      const schedules = await DiaryScheduleActions.getDiarySchedules({
        DiaryId: this.props.diaryId
      })

      this.setState({ schedules })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return <DiaryScheduleComponent state={this.state} />
  }
}
