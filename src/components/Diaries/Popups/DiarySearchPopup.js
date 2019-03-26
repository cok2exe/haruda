import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from '@/styled-ui'

import dateFormat from '@/utils/dateFormat'

import './style.scss'

export default class DiarySearchPopup extends Component {
  render() {
    const { step, diaryId, diaryPw, diary } = this.props.state
    const {
      hideDiarySearchPopup,
      handleChange,
      searchDiaryById,
      goToStep,
      joinDiary
    } = this.props
    return (
      <React.Fragment>
        <div className="popup popup--diary-search">
          <div className="popup-header">
            <h5>다이어리 검색</h5>
          </div>

          {step === 1 && (
            <div className="popup-body">
              <p>다이어리 ID를 입력해주세요.</p>
              <FormGroup>
                <FormControl
                  type="text"
                  name="diaryId"
                  value={diaryId}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
          )}
          {(step === 2 || step === 3) &&
            diary && (
              <div className="popup-body">
                <div
                  className="diary__profile"
                  style={{
                    backgroundImage:
                      diary.mainImage && `url(${diary.mainImage})`
                  }}
                />
                <div className="diary__title">{diary.title}</div>
                <p className="diary__desc">{diary.desc}</p>
                {step === 2 ? (
                  <div className="diary__manager">
                    {diary.User.name} ({diary.User.email})<br />
                    생성일: {dateFormat(diary.createdAt)}
                  </div>
                ) : (
                  <FormGroup>
                    <FormControl
                      type="password"
                      name="diaryPw"
                      value={diaryPw}
                      onChange={handleChange}
                      placeholder="다이어리 비밀번호 입력"
                    />
                  </FormGroup>
                )}
              </div>
            )}
          <div className="popup-footer">
            {step === 1 && <Button onClick={searchDiaryById}>검색</Button>}
            {step === 2 && (
              <React.Fragment>
                <Button onClick={() => goToStep(3)}>Join</Button>
                <Button onClick={() => goToStep(1)}>재검색</Button>
              </React.Fragment>
            )}
            {step === 3 && <Button onClick={joinDiary}>확인</Button>}
            <Button onClick={hideDiarySearchPopup}>취소</Button>
          </div>
        </div>
        <div className="dim" onClick={hideDiarySearchPopup} />
      </React.Fragment>
    )
  }
}
