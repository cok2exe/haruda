import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>하루다</h1>
        <Link to="/login">로그인</Link>
      </div>
    )
  }
}
