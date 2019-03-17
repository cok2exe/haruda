import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import FindPasswordComponent from '@/components/FindPassword'

import AuthActions from '@/actions/Auth'

@inject('authStore')
@observer
export default class LoginContainer extends Component {
  state = {
    email: '',
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

  async findPassword() {
    const { email, name } = this.state

    try {
      await AuthActions.findPassword({
        email,
        name
      })

      alert(
        '이메일로 메일을 발송했어요.\n임시 비밀번호를 확인 후 로그인 해주세요 :)'
      )
      this.props.history.push('/login')
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <FindPasswordComponent
        state={this.state}
        handleChange={this.handleChange}
        findPassword={this.findPassword.bind(this)}
      />
    )
  }
}
