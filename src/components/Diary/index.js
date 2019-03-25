import React, { Component } from 'react'

import DiaryContainer from '@/containers/Diary/Diary'

import './style.scss'

export default class DiaryMainComponent extends Component {
  render() {
    const { selectedDiaryTab } = this.props.state
    const { diaryId, selectDiaryTab } = this.props

    return (
      <div className="section-diary">
        <div className="container">
          {/* 다이어리 탭 */}
          <ul className="diary__tab">
            <li
              className={selectedDiaryTab === 'diary' ? 'active' : ''}
              onClick={() => selectDiaryTab('diary')}
            >
              Diary
            </li>
            <li
              className={selectedDiaryTab === 'schedule' ? 'active' : ''}
              onClick={() => selectDiaryTab('schedule')}
            >
              Schedule
            </li>
            <li
              className={selectedDiaryTab === 'todo' ? 'active' : ''}
              onClick={() => selectDiaryTab('todo')}
            >
              To do list
            </li>
          </ul>

          {/* 다이어리 search bar */}
          <div className="diary__search-bar" />

          {/* 다이어리 */}
          {selectedDiaryTab === 'diary' && <DiaryContainer diaryId={diaryId} />}
          {/* 일정 */}
          {/* 투두리스트 */}
        </div>
      </div>
    )
  }
}
