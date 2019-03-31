import React, { Component } from 'react'
import { SectionTitle, Button } from '@/styled-ui'

import Pagination from '@/components/Common/Pagination'

import dateFormat from '@/utils/dateFormat'

import './style.scss'

class AdminNoticesComponent extends Component {
  render() {
    const {
      page,
      pageSize,
      numberOfPages,
      count,

      notices
    } = this.props.state
    const { getNotices, deleteNoticeById, goToUpdate } = this.props

    const noticeRows = notices.map((notice, index) => {
      return (
        <tr key={index}>
          <td>{notice.id}</td>
          <td>{notice.title}</td>
          <td>{dateFormat(notice.createdAt)}</td>
          <td>
            <Button className="mr10" onClick={() => goToUpdate(notice.id)}>
              수정
            </Button>
            <Button onClick={() => deleteNoticeById(notice.id)}>삭제</Button>
          </td>
        </tr>
      )
    })

    return (
      <div className="section-admin-notices">
        <div className="container">
          <SectionTitle>공지사항 목록</SectionTitle>

          <table className="table">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>등록일</th>
                <th />
              </tr>
            </thead>
            <tbody>{noticeRows}</tbody>
          </table>

          {count > pageSize && (
            <Pagination
              page={page}
              numberOfPages={numberOfPages}
              prev={true}
              next={true}
              getNewPage={getNotices}
            />
          )}
        </div>
      </div>
    )
  }
}

export default AdminNoticesComponent
