import React, { Component, Fragment } from 'react'
import { Button, FormGroup, FormControl } from '@/styled-ui'
import DatePicker from 'react-datepicker'
import koLocale from 'date-fns/locale/ko'

export default class DiarySchedulePopup extends Component {
  render() {
    const { schedule, isEditMode } = this.props.state
    const {
      handleChange,
      handleChangeForDate,
      hidePopup,
      confirmPopup
    } = this.props

    return (
      <Fragment>
        <div className="popup popup--schedule">
          <div className="popup-header">
            <h5>{isEditMode ? '스케줄 수정' : '스케줄 추가'}</h5>
          </div>
          <div className="popup-body">
            <p>제목을 입력해주세요.</p>
            <FormGroup>
              <FormControl
                type="text"
                name="title"
                value={schedule.title}
                onChange={handleChange}
              />
            </FormGroup>
            <p>날짜를 선택해주세요.</p>
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={schedule.date}
              onChange={handleChangeForDate}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              placeholderText="YYYY-MM-DD"
              //onChangeRaw={e => e.preventDefault()}
            />
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
