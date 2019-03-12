import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import SampleActions from '@/actions/SampleActions'

import LoginComponent from '@/components/Login'

import './style.scss'

export default class LoginContainer extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    const updatedState = {}
    updatedState[e.target.name] = e.target.value
    this.setState(updatedState)
  }

  async login() {
    try {
      const user = SampleActions.getUsers()
      console.log(user)
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    const { username, password } = this.state

    return (
      (
        <Helmet key="helmet">
          <title>Login</title>
        </Helmet>
      ),
      (
        <LoginComponent
          key="component"
          username={username}
          password={password}
          handleChange={this.handleChange}
          login={this.login.bind(this)}
        />
      )
    )
  }
}
