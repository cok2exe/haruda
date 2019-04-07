import React, { Component } from 'react'
import ChangePwComponent from '@/components/MyPage/ChangePw'

import UserActions from '@/actions/User'

import { passwordValidation } from '@/utils/validation'

export default class ChangePwdContainer extends Component {
  state = {
    password: '',
    newPassword: '',
    reNewPassword: ''
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

  async changePassword() {
    const { password, newPassword, reNewPassword } = this.state

    try {
      if (newPassword !== reNewPassword) {
        throw new Error('변경할 비밀번호가 일치하지 않습니다!')
      }
      if (!passwordValidation(newPassword)) {
        throw new Error(
          '비밀번호는 특수문자를 포함해서 8자리 이상으로 입력해주세요ㅠㅠ'
        )
      }
      await UserActions.changePassword({ password, newPassword })

      alert('비밀번호 변경이 완료되었습니다.')
      this.setState({
        password: '',
        newPassword: '',
        reNewPassword: ''
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <ChangePwComponent
        state={this.state}
        handleChange={this.handleChange}
        changePassword={this.changePassword.bind(this)}
      />
    )
  }
}
