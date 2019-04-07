import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import NavbarComponent from '@/components/Common/Navbar'
import AdminNavbarComponent from '@/components/Common/Navbar/admin'

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
    return this.props.isAdmin ? (
      <AdminNavbarComponent
        user={user}
        path={this.props.match.path}
        logout={this.logout}
      />
    ) : (
      <NavbarComponent
        user={user}
        path={this.props.match.path}
        logout={this.logout}
      />
    )
  }
}
