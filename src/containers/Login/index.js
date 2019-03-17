import React, { Component } from 'react'
import LoginComponent from '@/components/Login'

import AuthActions from '@/actions/Auth'

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
      await AuthActions.login({
        email,
        password
      })

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
        login={this.login.bind(this)}
      />
    )
  }
}
