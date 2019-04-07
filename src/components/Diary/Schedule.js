import React, { Component } from 'react'

import { Button } from '@/styled-ui'
import dateFns from 'date-fns'
import koLocale from 'date-fns/locale/ko'

import './style.scss'

export default class DiaryScheduleComponent extends Component {
  render() {
    const { schedules } = this.props.state

    const scheduleRows = schedules.map((schedule, index) => {
      return (
        <li key={index}>
          <div className="schedule__title">{schedule.title}</div>
          <div className="schedule__date">{schedule.date}</div>
          <div className="schedule__d-day">
            {new Date() > new Date(schedule.date) ? '+' : '-'}
            {dateFns.distanceInWordsStrict(
              new Date(),
              new Date(schedule.date),
              {
                locale: koLocale,
                unit: 'd'
              }
            )}
          </div>
        </li>
      )
    })

    return (
      <div className="diary-schedule">
        <div className="btns">
          <Button>추가</Button>
        </div>
        <ul>{scheduleRows}</ul>
      </div>
    )
  }
}
