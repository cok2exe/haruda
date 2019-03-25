import React, { Component } from 'react'
import { SectionTitle, Accordian } from '@/styled-ui'

import Pagination from '@/components/Common/Pagination'

import dateFormat from '@/utils/dateFormat'

import './style.scss'

class NoticesComponent extends Component {
  render() {
    const {
      page,
      pageSize,
      numberOfPages,
      count,

      notices,
      notice
    } = this.props.state
    const { getNotices, getNoticeById } = this.props

    const noticeRows = notices.map((row, index) => {
      return (
        <Accordian
          key={index}
          onClick={() => getNoticeById(row.id)}
          className={(notice && notice.id) === row.id ? 'active' : ''}
        >
          <div className="accordian__title">
            <span>{row.title}</span>
            <span className="date">{dateFormat(row.createdAt)}</span>
          </div>
          <div className="accordian__content">{notice && notice.content}</div>
        </Accordian>
      )
    })
    return (
      <div className="section-notice">
        <div className="container">
          <SectionTitle>공지사항</SectionTitle>
          {noticeRows}
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

export default NoticesComponent
