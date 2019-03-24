import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/styled-ui'

import './style.scss'
import dateFormat from '@/utils/dateFormat'

export default class DiariesComponent extends Component {
  render() {
    const { diaries } = this.props.state
    const { openDiarySearchPopup } = this.props

    const diaryRow = diaries.map((diary, index) => {
      return (
        <Link to={`/diaries/${diary.DiaryId}`} key={index}>
          <div className="diary">
            <div
              className="diary__profile"
              style={{
                backgroundImage:
                  diary.Diary.mainImage && `url(${diary.Diary.mainImage})`
              }}
            />

            <div className="diary__info">
              <div className="diary__title">{diary.Diary.title}</div>
              <p className="diary__desc">{diary.Diary.desc}</p>
              <div className="diary__date">{dateFormat(diary.createdAt)}</div>
            </div>
          </div>
        </Link>
      )
    })

    return (
      <div className="section-diaries">
        <div className="container">
          <Button onClick={openDiarySearchPopup}>다이어리 검색</Button>
          <div className="diaries">{diaryRow}</div>
        </div>
      </div>
    )
  }
}
