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

  async login() {
    const { email, password } = this.state

    try {
      const result = await AuthActions.login({
        email,
        password
      })

      this.props.history.push('/')
      this.props.authStore.setUser(result.user)
      setTokenFromLocalStorage(result.token)
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <LoginComponent
        state={this.state}
        handleChange={this.handleChange}
        login={this.login.bind(this)}
      />
    )
  }
}
