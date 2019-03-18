import React, { Component } from 'react'
import {
  SectionTitle,
  SectionForm,
  FormGroup,
  FormControl,
  Button
} from '@/styled-ui'

import './style.scss'

export default class ChangePasswordComponent extends Component {
  render() {
    const { password, newPassword, reNewPassword } = this.props.state
    const { handleChange, changePassword } = this.props

    return (
      <SectionForm className="section-mypage change-password">
        <div className="container">
          <SectionTitle>비밀번호 변경</SectionTitle>
          <div className="section__form">
            <FormGroup>
              <FormControl
                type="password"
                name="password"
                value={password}
                placeholder="현재 비밀번호"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                name="newPassword"
                value={newPassword}
                placeholder="변경할 비밀번호"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                name="reNewPassword"
                value={reNewPassword}
                placeholder="변경할 비밀번호 재입력"
                onChange={handleChange}
              />
            </FormGroup>
            <Button onClick={changePassword}>비밀번호 변경</Button>
          </div>
        </div>
      </SectionForm>
    )
  }
}
