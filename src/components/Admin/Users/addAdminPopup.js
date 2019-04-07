import React, { Fragment } from 'react'
import { Button, FormGroup, FormControl } from '@/styled-ui'

const AddAdminPopup = ({
  admin,
  handleChangeForNewAdmin,
  toggleAddAdminPopup,
  addAdmin
}) => {
  return (
    <Fragment>
      <div className="popup popup--todo-list">
        <div className="popup-header">
          <h5>관리자 추가</h5>
        </div>
        <div className="popup-body">
          <p>이메일</p>
          <FormGroup>
            <FormControl
              type="text"
              name="email"
              value={admin.email}
              onChange={handleChangeForNewAdmin}
            />
          </FormGroup>
          <p>비밀번호</p>
          <FormGroup>
            <FormControl
              type="password"
              name="password"
              value={admin.password}
              onChange={handleChangeForNewAdmin}
            />
          </FormGroup>
          <p>비밀번호 확인</p>
          <FormGroup>
            <FormControl
              type="password"
              name="confirmPassword"
              value={admin.confirmPassword}
              onChange={handleChangeForNewAdmin}
            />
          </FormGroup>
          <p>이름</p>
          <FormGroup>
            <FormControl
              type="text"
              name="name"
              value={admin.name}
              onChange={handleChangeForNewAdmin}
            />
          </FormGroup>
        </div>
        <div className="popup-footer">
          <Button onClick={addAdmin}>추가</Button>
          <Button onClick={toggleAddAdminPopup}>취소</Button>
        </div>
      </div>
      <div className="dim" onClick={toggleAddAdminPopup} />
    </Fragment>
  )
}

export default AddAdminPopup
