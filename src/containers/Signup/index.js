import React, { Component } from 'react'
import SignupComponent from '@/components/Signup'

import AuthActions from '@/actions/Auth'

export default class SignupContainer extends Component {
  state = {
    email: '',
    password: '',
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

  async signup() {
    const { email, password, name } = this.state

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
        signup={this.signup.bind(this)}
      />
    )
  }
}
