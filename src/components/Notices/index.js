import React, { Component } from 'react'
import { Accordian } from '@/styled-ui'

import Pagination from '@/components/Common/Pagination'

import dateFormat from '@/utils/dateFormat'

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
        <Accordian key={index} onClick={() => getNoticeById(row.id)}>
          {row.title}
          <span className="date">{dateFormat(row.createdAt)}</span>
          {notice && (
            <div className={`content ${notice.id === row.id ? 'active' : ''}`}>
              {notice.content}
            </div>
          )}
        </Accordian>
      )
    })
    return (
      <div className="container">
        <div>공지사항</div>
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
    )
  }
}

export default NoticesComponent
