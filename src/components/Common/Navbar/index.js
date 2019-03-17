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
          <div className="navbar__menus">
            <Link to="#">My Diary</Link>
            {/* <button>로그아웃</button> */}
          </div>
        </div>
      </div>
    )
  }
}
