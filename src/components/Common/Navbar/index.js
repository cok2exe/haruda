import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { LinkButton } from '@/styled-ui'

import './style.scss'

export default class NavbarContainer extends Component {
  render() {
    const { user, pathname, logout } = this.props

    return (
      <div className="navbar">
        <div className="container">
          <Link to="/">
            <div className="navbar__logo">하루다</div>
          </Link>
          <div
            className={`navbar__menus ${
              user && pathname === '/diary' ? 'user' : ''
            }`}
          >
            {user && pathname === '/diary' ? (
              <React.Fragment>
                <b>{user.name}님의 하루다</b>
                <LinkButton onClick={logout}>로그아웃</LinkButton>
              </React.Fragment>
            ) : (
              <Link to="/diary">My Diary</Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}
