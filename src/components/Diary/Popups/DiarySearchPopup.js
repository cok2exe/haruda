import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from '@/styled-ui'

import './style.scss'

export default class DiarySearchPopup extends Component {
  render() {
    const { diaryId, step } = this.props.state
    const {
      hideDiarySearchPopup,
      handleChange,
      searchDiaryById,
      goToStep
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

          <div className="popup-footer">
            <Button onClick={searchDiaryById}>검색</Button>
            <Button onClick={hideDiarySearchPopup}>취소</Button>
          </div>
        </div>
        <div className="dim" onClick={hideDiarySearchPopup} />
      </React.Fragment>
    )
  }
}
