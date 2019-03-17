import React, { Component } from 'react'

import { FormGroup, FormControl, Button } from '@/styled-ui'

export default class SignupComponent extends Component {
  render() {
    const { email, password, name } = this.props.state
    const { handleChange, signup } = this.props

    return (
      <div className="section-signup">
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
          회원가입
        </Button>
      </div>
    )
  }
}
