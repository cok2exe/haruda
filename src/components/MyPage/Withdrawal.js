import React from 'react'
import { SectionTitle, SectionForm, Button } from '@/styled-ui'

import './style.scss'

export default ({ withdrawal }) => {
  return (
    <SectionForm className="section-mypage change-password">
      <div className="container">
        <SectionTitle>회원 탈퇴</SectionTitle>
        <div className="mb10">
          <p>소중한 다이어리와 글이 모두 삭제됩니다ㅠㅠ</p>
          <p>그래도 탈퇴 하시겠습니까?</p>
        </div>
        <Button onClick={withdrawal}>회원 탈퇴</Button>
      </div>
    </SectionForm>
  )
}
