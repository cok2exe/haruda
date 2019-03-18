import React, { Component } from 'react'
import ChangePwComponent from '@/components/MyPage/ChangePw'

import MyPageActions from '@/actions/MyPage'

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
    const { password, newPassword } = this.state

    try {
      await MyPageActions.changePassword({ password, newPassword })

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
