import React, { Component } from 'react'
import {
  SectionTitle,
  SectionForm,
  FormGroup,
  FormControl,
  Button
} from '@/styled-ui'

export default class FindPasswordComponent extends Component {
  render() {
    const { email, name } = this.props.state
    const { handleChange, findPassword } = this.props

    return (
      <SectionForm className="section-login">
        <div className="container">
          <SectionTitle>비밀번호 찾기</SectionTitle>
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
                type="text"
                className="form-control"
                name="name"
                value={name}
                placeholder="이름"
                onChange={handleChange}
              />
            </FormGroup>
            <Button purple onClick={findPassword}>
              비밀번호 찾기{' '}
              <img src="/images/common/icon_wonder.png" alt="find_password" />
            </Button>
          </div>
        </div>
      </SectionForm>
    )
  }
}
