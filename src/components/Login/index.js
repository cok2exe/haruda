import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FormGroup, FormControl, Button } from '@/styled-ui'

export default class LoginComponent extends Component {
  render() {
    const { email, password } = this.props.state
    const { handleChange, login } = this.props

    return (
      <div className="section-login">
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
        <Button purple onClick={login}>
          로그인
        </Button>
        <br />
        <Button blue="true" as={Link} to="/signup">
          회원가입
        </Button>
      </div>
    )
  }
}
