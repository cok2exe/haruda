import React, { Component } from 'react'

import { Button } from '@/styled-ui'
import dateFns from 'date-fns'
import koLocale from 'date-fns/locale/ko'

import './style.scss'

export default class DiaryScheduleComponent extends Component {
  render() {
    const { comming, dDay, past } = this.props.state
    const { openPopup, deleteDiarySchedule } = this.props

    const scheduleArr = [dDay, comming, past]

    const scheduleRows = scheduleArr.map(target =>
      target.map((schedule, index) => {
        return (
          <li key={index}>
            <div className="schedule__title">
              {schedule.title}
              <div className="btns">
                <Button onClick={() => openPopup(schedule)}>수정</Button>
                <Button onClick={() => deleteDiarySchedule(schedule.id)}>
                  삭제
                </Button>
              </div>
            </div>
            <div className="schedule__user">
              added by. <span className="c-purple">{schedule.User.name}</span>
            </div>
            <div className="schedule__date">{schedule.date}</div>
            <div className="schedule__d-day">
              {dateFns.isToday(new Date(schedule.date))
                ? 'D-day'
                : `${
                    new Date() > new Date(schedule.date) ? '+' : '-'
                  } ${dateFns.distanceInWordsStrict(
                    new Date() > new Date(schedule.date)
                      ? new Date()
                      : dateFns.addDays(new Date(), -1),
                    new Date(schedule.date),
                    {
                      locale: koLocale,
                      unit: 'd'
                    }
                  )}`}
            </div>
          </li>
        )
      })
    )

    return (
      <div className="diary-schedule">
        <div className="btns">
          <Button onClick={() => openPopup()}>추가</Button>
        </div>
        <ul>{scheduleRows}</ul>
      </div>
    )
  }
}
