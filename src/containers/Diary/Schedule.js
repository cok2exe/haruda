import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import dateFns from 'date-fns'

import DiaryScheduleActions from '@/actions/DiarySchedules'

import DiaryScheduleComponent from '@/components/Diary/Schedule'
import DiarySchedulePopup from '@/components/Diary/Popups/Schedule'

@inject('authStore')
@observer
export default class ScheduleContainer extends Component {
  state = {
    comming: [],
    dDay: [],
    past: [],

    schedule: null,
    isEditMode: false,
    isShowSchedulePopup: false
  }

  async componentDidMount() {
    await this.getDiarySchedules()
  }

  getDiarySchedules = async () => {
    try {
      const result = await DiaryScheduleActions.getDiarySchedules({
        DiaryId: this.props.diaryId
      })

      this.setState({
        comming: result.comming,
        dDay: result.dDay,
        past: result.past
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  openPopup = schedule => {
    this.setState({
      schedule: schedule ? schedule : { title: '', date: new Date() },
      isShowSchedulePopup: true,
      isEditMode: !!schedule
    })
  }

  hidePopup = () => {
    this.setState({
      schedule: null,
      isShowSchedulePopup: false,
      isEditMode: false
    })
  }

  handleChange = e => {
    const schedule = { ...this.state.schedule }
    switch (e.target.name) {
      default:
        schedule[e.target.name] = e.target.value
        break
    }
    this.setState({ schedule })
  }

  handleChangeForDate = date => {
    const schedule = { ...this.state.schedule }
    schedule.date = date
    this.setState({ schedule })
  }

  confirmPopup = async () => {
    try {
      const { schedule, isEditMode } = this.state
      schedule.date = dateFns.format(new Date(schedule.date), 'YYYY-MM-DD')

      if (isEditMode) {
        await DiaryScheduleActions.updateDiarySchedule({ schedule })
      } else {
        schedule.DiaryId = this.props.diaryId
        await DiaryScheduleActions.createDiarySchedule({ schedule })
      }

      await this.getDiarySchedules()
      this.hidePopup()
      alert(isEditMode ? '수정되었습니다 :)' : '추가되었습니다 :)')
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  deleteDiarySchedule = async id => {
    try {
      if (window.confirm('정말 삭제할건가요? ㅠㅠ')) {
        await DiaryScheduleActions.deleteDiarySchedule({ id })
        alert('삭제되었습니다 ;(')
        await this.getDiarySchedules()
      }
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <Fragment>
        <DiaryScheduleComponent
          state={this.state}
          openPopup={this.openPopup}
          deleteDiarySchedule={this.deleteDiarySchedule}
        />
        {this.state.isShowSchedulePopup && (
          <DiarySchedulePopup
            state={this.state}
            handleChange={this.handleChange}
            handleChangeForDate={this.handleChangeForDate}
            hidePopup={this.hidePopup}
            confirmPopup={this.confirmPopup}
          />
        )}
      </Fragment>
    )
  }
}
