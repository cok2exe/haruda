import React, { Component } from 'react'

import AdminNoticeActions from '@/actions/Admin/Notices'

import AdminNoticesComponent from '@/components/Admin/Notices'

import pagination from '@/utils/pagination'

class AdminNoticesConatiner extends Component {
  state = {
    page: 1,
    pageSize: 20,
    count: 0,
    numberOfPages: 0,

    notices: []
  }

  async componentDidMount() {
    await this.getNotices(1)
  }

  async getNotices(page) {
    try {
      const { pageSize } = this.state
      const result = await AdminNoticeActions.getNotices({
        page,
        pageSize
      })

      const calculatePagination = pagination({
        page,
        pageSize,
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

  async deleteNoticeById(id) {
    try {
      if (window.confirm('해당 공지사항을 삭제하시겠습니까?')) {
        await AdminNoticeActions.deleteNoticeById(id)

        alert('삭제 되었습니다.')
        await this.getNotices(this.state.page)
      }
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <AdminNoticesComponent
        state={this.state}
        getNotices={this.getNotices.bind(this)}
        deleteNoticeById={this.deleteNoticeById.bind(this)}
      />
    )
  }
}

export default AdminNoticesConatiner
