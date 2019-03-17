import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Button } from '@/styled-ui'

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
            <Button blue>하루다 시작하기</Button>
            <div className="main-info__img" />
          </div>
        </div>

        {/* 메인 섹션 2 */}
        <div className="main-what">
          <span>수정할것임</span>
          하루다는 매일 반복되는 하루, 별 것 아닌 오늘도, <br />
          훗날 '소중한 추억'이 될 수 있음을 알아차렸습니다.<br />
          누군가와 다툰 날도,<br />
          누군가와 행복했던 날도,<br />
          하루종일 혼자 보낸 날도,<br />
          여러분의 모든 하루<span>마음</span>를 기록해주세요.
        </div>
      </div>
    )
  }
}
