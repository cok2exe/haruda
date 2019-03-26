import React, { Component } from 'react'
import { Accordian, Button } from '@/styled-ui'

import Pagination from '@/components/Common/Pagination'

import dateFormat from '@/utils/dateFormat'

import './style.scss'

class QnasComponent extends Component {
  render() {
    const {
      page,
      pageSize,
      numberOfPages,
      count,

      selectedId,
      qnas
    } = this.props.state
    const {
      toggleQnaAccordian,
      openQnaPopup,
      getUserQnas,
      deleteQnaById
    } = this.props

    const qnaRows = qnas.map((qna, index) => {
      return (
        <Accordian
          key={index}
          onClick={() => toggleQnaAccordian(qna.id)}
          className={selectedId === qna.id ? 'active' : ''}
        >
          <div className="accordian__title">
            <span>{qna.title}</span>
            <span className="date">
              {dateFormat(qna.createdAt)}
              {/* 추후 아이콘으로 바뀌었으면 좋겠음 ㅠㅠ */}
              {qna.answer && (
                <Button onClick={e => openQnaPopup(e, qna)}>수정</Button>
              )}
              <Button onClick={e => deleteQnaById(e, qna.id)}>삭제</Button>
            </span>
          </div>
          <div className="accordian__content">
            <div className="qna qna_question">{qna.question}</div>
            <div className="qna qna_answer">
              {qna.answer
                ? qna.answer
                : '아직 답변이 달리지 않았어요. 조금만 더 기다려주세요ㅠㅠ'}
            </div>
          </div>
        </Accordian>
      )
    })

    return (
      <div className="container qnas-container">
        <div>QnA</div>
        <div className="section-btn">
          <Button onClick={openQnaPopup}>추가</Button>
        </div>
        {qnaRows}
        {count > pageSize && (
          <Pagination
            page={page}
            numberOfPages={numberOfPages}
            prev={true}
            next={true}
            getNewPage={getUserQnas}
          />
        )}
      </div>
    )
  }
}

export default QnasComponent
