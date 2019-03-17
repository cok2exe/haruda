import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/styled-ui'

import './style.scss'

export default class NavbarContainer extends Component {
  render() {
    const { user, logout } = this.props

    return (
      <div className="navbar">
        <div className="container">
          <Link to="/">
            <div className="navbar__logo">하루다</div>
          </Link>
          <div className="navbar__menus">
            <Link to="#">My Diary</Link>
            {user && <Button onClick={logout}>로그아웃</Button>}
          </div>
        </div>
      </div>
    )
  }
}
