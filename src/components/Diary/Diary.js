import React, { Component } from 'react'

import { Button } from '@/styled-ui'

export default class DiaryComponent extends Component {
  render() {
    const { openDiarySearchPopup } = this.props
    return (
      <div className="diary__content diary-list">
        <Button onClick={openDiarySearchPopup}>다이어리 검색</Button>
        <div>다이어리 리스트입니다</div>
      </div>
    )
  }
}
