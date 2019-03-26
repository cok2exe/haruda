import React, { Component, Fragment } from 'react'
import { Button, FormGroup, FormControl, FormTextarea } from '@/styled-ui'

class QnaPopup extends Component {
  render() {
    const { qna, isEditMode } = this.props.state
    const { handleChange, hideQnaPopup, confirmPopup } = this.props
    return (
      <Fragment>
        <div className="popup popup--qna">
          <div className="popup-header">
            <h5>{isEditMode ? 'QnA 수정' : 'QnA 추가'}</h5>
          </div>
          <div className="popup-body">
            <p>제목을 입력해주세요.</p>
            <FormGroup>
              <FormControl
                type="text"
                name="title"
                value={qna.title}
                onChange={handleChange}
              />
            </FormGroup>
            <p>내용을 입력해주세요.</p>
            <FormGroup>
              <FormTextarea
                type="textarea"
                name="question"
                value={qna.question}
                onChange={handleChange}
              />
            </FormGroup>
          </div>
          <div className="popup-footer">
            <Button onClick={confirmPopup}>
              {isEditMode ? '수정' : '추가'}
            </Button>
            <Button onClick={hideQnaPopup}>취소</Button>
          </div>
        </div>
        <div className="dim" onClick={hideQnaPopup} />
      </Fragment>
    )
  }
}

export default QnaPopup
