import React, { Component, Fragment } from 'react'
import { Button, FormGroup, FormControl } from '@/styled-ui'

class DiaryTodoListPopup extends Component {
  render() {
    const { todo, isEditMode } = this.props.state
    const { handleChange, hidePopup, confirmPopup } = this.props
    return (
      <Fragment>
        <div className="popup popup--todo-list">
          <div className="popup-header">
            <h5>{isEditMode ? 'To do list 수정' : 'To do list 추가'}</h5>
          </div>
          <div className="popup-body">
            <p>제목을 입력해주세요.</p>
            <FormGroup>
              <FormControl
                type="text"
                name="title"
                value={todo.title}
                onChange={handleChange}
              />
            </FormGroup>
          </div>
          <div className="popup-footer">
            <Button onClick={confirmPopup}>
              {isEditMode ? '수정' : '추가'}
            </Button>
            <Button onClick={hidePopup}>취소</Button>
          </div>
        </div>
        <div className="dim" onClick={hidePopup} />
      </Fragment>
    )
  }
}

export default DiaryTodoListPopup
