import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export default class NavbarContainer extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <Link to="/">
            <div className="navbar__logo">하루다</div>
          </Link>
          <ul className="navbar__list">
            <li>
              <Link to="#">메뉴1</Link>
            </li>
            <li>
              <Link to="#">메뉴2</Link>
            </li>
          </ul>
          <div className="navbar__user">
            <Link to="#">로그인</Link>
            <button>로그아웃</button>
          </div>
        </div>
      </div>
    )
  }
}
