import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import NavbarComponent from '@/components/Common/Navbar'

import { removeTokenFromLocalStorage } from '@/utils/localStorage'

@inject('authStore')
@observer
export default class NavbarContainer extends Component {
  logout = () => {
    this.props.authStore.setUser(null)
    removeTokenFromLocalStorage()
    this.props.history.push('/')
  }

  render() {
    const { user } = this.props.authStore
    return <NavbarComponent user={user} logout={this.logout} />
  }
}
