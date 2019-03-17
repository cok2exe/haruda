import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
  SectionForm,
  SectionTitle,
  FormGroup,
  FormControl,
  Button
} from '@/styled-ui'

export default class SignupComponent extends Component {
  render() {
    const { email, password, name } = this.props.state
    const { handleChange, signup } = this.props

    return (
      <SectionForm className="section-signup">
        <div className="container">
          <SectionTitle>회원가입</SectionTitle>
          <div className="section__form">
            <FormGroup>
              <FormControl
                type="text"
                className="form-control"
                name="email"
                value={email}
                placeholder="이메일"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                className="form-control"
                name="password"
                value={password}
                placeholder="비밀번호"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="text"
                className="form-control"
                name="name"
                value={name}
                placeholder="이름"
                onChange={handleChange}
              />
            </FormGroup>
            <Button purple onClick={signup}>
              회원가입 <img src="/images/common/icon_love.png" alt="signup" />
            </Button>
          </div>
          <div className="section__sub">
            <Link to="/login">이미 하루다를 시작하셨다면? Login</Link>
          </div>
        </div>
      </SectionForm>
    )
  }
}
