import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { LinkButton } from '@/styled-ui'

import './style.scss'

export default class AdminNavbarComponent extends Component {
  render() {
    const { path, logout } = this.props
    const pathname = path.split('/')[2]
    console.log('pathname', pathname)

    return (
      <div className="navbar">
        <div className="container">
          <Link to="/">
            <div className="navbar__logo">하루다</div>
          </Link>
          <Link to="/admin/users">
            <div className="">회원목록</div>
          </Link>
          <Link to="/admin/notices">
            <div className="">공지사항</div>
          </Link>
          <Link to="/admin/qnas">
            <div className="">QnA</div>
          </Link>
          <div className={`navbar__menus`}>
            <LinkButton onClick={logout}>로그아웃</LinkButton>
          </div>
        </div>
      </div>
    )
  }
}
