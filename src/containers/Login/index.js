import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import LoginComponent from '@/components/Login'

import AuthActions from '@/actions/Auth'
import { setTokenFromLocalStorage } from '@/utils/localStorage'

@inject('authStore')
@observer
export default class LoginContainer extends Component {
  state = {
    email: '',
    password: ''
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

  async handleKeyPress(e) {
    if (e.charCode === 13) {
      await this.login()
    }
  }

  async login() {
    const { email, password } = this.state

    try {
      const result = await AuthActions.login({
        email,
        password
      })

      this.props.authStore.setUser(result)
      setTokenFromLocalStorage(result.token)
      this.props.history.push('/')
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <LoginComponent
        state={this.state}
        handleChange={this.handleChange}
        handleKeyPress={this.handleKeyPress.bind(this)}
        login={this.login.bind(this)}
      />
    )
  }
}
