import React, { Component } from 'react'
import SignupComponent from '@/components/Signup'

import AuthActions from '@/actions/Auth'

import { checkEmail, passwordValidation } from '@/utils/validation'

export default class SignupContainer extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  }

  handleChange = e => {
    const state = { ...this.state }

    switch (e.target.name) {
      default:
        state[e.target.name] = e.target.value
        break
    }

    this.setState(state)
  }

  signup = async () => {
    const { email, password, confirmPassword, name } = this.state

    if (!checkEmail(email)) {
      throw new Error('이메일 형식에 맞게 입력해주세요ㅠㅠ')
    }
    if (password !== confirmPassword) {
      throw new Error('비밀번호가 일치하지 않습니다!')
    }
    if (!passwordValidation(password)) {
      throw new Error(
        '비밀번호는 특수문자를 포함해서 8자리 이상으로 입력해주세요ㅠㅠ'
      )
    }
    if (!name) {
      throw new Error('이름을 입력해주세요!')
    }

    try {
      await AuthActions.signup({
        email,
        password,
        name
      })

      alert('회원가입에 성공하였습니다.')
      this.props.history.push('/login')
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <SignupComponent
        state={this.state}
        handleChange={this.handleChange}
        signup={this.signup}
      />
    )
  }
}
