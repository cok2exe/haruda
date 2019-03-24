import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { UserProfile, LinkButton } from '@/styled-ui'

import './style.scss'

export default class NavbarComponent extends Component {
  render() {
    const { user, path, logout } = this.props
    return (
      <div className="navbar">
        <div className="container">
          <Link to="/">
            <div className="navbar__logo">하루다</div>
          </Link>
          <div className={`navbar__menus ${user ? 'user' : ''}`}>
            {user ? (
              <React.Fragment>
                {path === '/diaries/:id' && <b>{user.name}님의 하루다</b>}
                <UserProfile
                  small="true"
                  as={Link}
                  to="/mypage"
                  style={{
                    backgroundImage:
                      user.profileImage && `url(${user.profileImage})`
                  }}
                />
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
