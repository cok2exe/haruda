import React, { Component } from 'react'

import DiaryDetail from './DiaryDetail'

import dateFormat from '@/utils/dateFormat'
import { feelings, weathers } from '@/utils/diaryElements'

export default class DiaryComponent extends Component {
  render() {
    const { diaries, diary, activeDiaryId } = this.props.state
    const { getDiariesById, getDiaryById } = this.props

    const diaryRows = diaries.map((timeline, index) => {
      return (
        <div className="diary-panel" key={index}>
          <div className="diary-panel__date">{timeline.createdDate}</div>
          <div className="diary-panel__rows">
            {timeline.contents.map((content, cIdx) => {
              const createTime = dateFormat(content.createdAt)
              const time = createTime.split(' ')

              return (
                <div
                  className={`diary ${
                    activeDiaryId === content.id ? 'open' : ''
                  }`}
                  key={cIdx}
                >
                  <div
                    className="diary__info"
                    onClick={() => getDiaryById(content.id)}
                  >
                    <div className="diary__title">
                      {content.title} {feelings(content.feeling)}{' '}
                      {weathers(content.weather)}
                    </div>
                    <div className="diary__creator">
                      {content.User.name} {time[1]}
                    </div>
                  </div>

                  {diary &&
                    activeDiaryId === content.id && (
                      <DiaryDetail diary={diary} />
                    )}
                </div>
              )
            })}
          </div>
        </div>
      )
    })
    return <div className="diary-timeline">{diaryRows}</div>
  }
}
