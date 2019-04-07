import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle, Button, FormGroup, FormControl } from '@/styled-ui'

import Pagination from '@/components/Common/Pagination'

import dateFormat from '@/utils/dateFormat'

import './style.scss'

class AdminQnasComponent extends Component {
  render() {
    const {
      page,
      pageSize,
      numberOfPages,
      count,

      title,
      isWaitingAnswer,

      qnas
    } = this.props.state
    const { getQnas, handleChange } = this.props

    const qnaRows = qnas.map((qna, index) => {
      return (
        <tr key={index}>
          <td>{qna.id}</td>
          <td>{qna.title}</td>
          <td>{qna.answer ? '답변 완료' : '답변 대기'}</td>
          <td>{dateFormat(qna.createdAt)}</td>
          <td>
            <Button className="mr10" as={Link} to={`/admin/qnas/${qna.id}`}>
              상세보기
            </Button>
          </td>
        </tr>
      )
    })

    return (
      <div className="section-admin qnas">
        <div className="container">
          <SectionTitle>QnA 목록</SectionTitle>

          <div className="search-option">
            <span className="mr10">제목</span>
            <FormGroup className="title">
              <FormControl
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="질문 제목 검색"
              />
            </FormGroup>
            <FormGroup className="radio-wrapper">
              <label htmlFor="all">전체</label>
              <input
                type="radio"
                id="all"
                name="isWaitingAnswer"
                checked={!isWaitingAnswer}
                value=""
                onChange={handleChange}
              />
              <label htmlFor="isWaitingAnswer">답변 대기</label>
              <input
                type="radio"
                id="isWaitingAnswer"
                name="isWaitingAnswer"
                checked={isWaitingAnswer}
                value="Y"
                onChange={handleChange}
              />
            </FormGroup>
            <Button onClick={() => getQnas(1, true)}>검색</Button>
          </div>

          <table className="table">
            <colgroup>
              <col />
              <col width="60%" />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>상태</th>
                <th>등록일</th>
                <th />
              </tr>
            </thead>
            <tbody>{qnaRows}</tbody>
          </table>

          {count > pageSize && (
            <Pagination
              page={page}
              numberOfPages={numberOfPages}
              prev={true}
              next={true}
              getNewPage={getQnas}
            />
          )}
        </div>
      </div>
    )
  }
}

export default AdminQnasComponent
