import React, { Component } from 'react'

import NoticesAction from '@/actions/Notices'

import NoticesComponent from '@/components/Notices'

import pagination from '@/utils/pagination'

class NoticesContainer extends Component {
  state = {
    page: 1,
    pageSize: 10,
    count: 0,
    numberOfPages: 0,

    notices: [],
    notice: null
  }

  async componentDidMount() {
    await this.getNotices(1)
  }

  async getNotices(page) {
    try {
      const result = await NoticesAction.getNotices({
        page,
        pageSize: this.state.pageSize
      })

      const calculatePagination = pagination({
        page,
        pageSize: this.state.pageSize,
        count: result.count
      })

      this.setState({
        notices: result.rows,
        ...calculatePagination
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  async getNoticeById(id) {
    try {
      let notice = null
      if (!this.state.notice || this.state.notice.id !== id) {
        notice = await NoticesAction.getNoticeById({ id })
      }
      this.setState({
        notice
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <NoticesComponent
        state={this.state}
        getNotices={this.getNotices.bind(this)}
        getNoticeById={this.getNoticeById.bind(this)}
      />
    )
  }
}

export default NoticesContainer
