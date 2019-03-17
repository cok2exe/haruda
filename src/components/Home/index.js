import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from '@/styled-ui'

import './style.scss'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="section-main">
        {/* 메인 섹션 1 */}
        <div className="main-info">
          <div className="container">
            <div className="main-info__text">
              너와 함께한 <b className="c-blue">하루다</b>
              <br />
              우리가 함께한 <b className="c-blue">하루다</b>
              <br />
              너와 나, 우리의 <b className="c-blue">추억을 공유하다</b>
            </div>
            {/* <Button>하루다 시작하기</Button> */}
            <div className="main-info__img" />
          </div>
        </div>

        {/* 메인 섹션 2 */}
        <div className="main-how" />
      </div>
    )
  }
}
