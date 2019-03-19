import React, { Component } from 'react'

import { SectionTitle } from '@/styled-ui'

export default class DiaryComponent extends Component {
  render() {
    return (
      <div className="section-diary">
        <div className="container">
          <SectionTitle>다이어리</SectionTitle>
        </div>
      </div>
    )
  }
}
