import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
  SectionTitle,
  SectionForm,
  FormGroup,
  FormControl,
  Button
} from '@/styled-ui'

export default class LoginComponent extends Component {
  render() {
    const { email, password } = this.props.state
    const { handleChange, handleKeyPress, login } = this.props

    return (
      <SectionForm className="section-login">
        <div className="container">
          <SectionTitle>로그인</SectionTitle>
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
                onKeyPress={handleKeyPress}
              />
            </FormGroup>
            <Button purple onClick={login}>
              로그인 <img src="/images/common/icon_happy.png" alt="login" />
            </Button>
          </div>

          <div className="section__sub">
            <Link to="/find-password">
              Forgot Password{' '}
              <img src="/images/common/icon_sad.png" alt="forgot_password" />
            </Link>
            <Link to="/signup">
              Sign Up <img src="/images/common/icon_love.png" alt="signup" />
            </Link>
          </div>
        </div>
      </SectionForm>
    )
  }
}
