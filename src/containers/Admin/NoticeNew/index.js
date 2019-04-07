import React, { Component } from 'react'

import AdminNoticeActions from '@/actions/Admin/Notices'

import AdminNoticeNewComponent from '@/components/Admin/NoticeNew'

class AdminNoticeNewContainer extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = e => {
    const state = { ...this.state }

    if (e.target.name) {
      state[e.target.name] = e.target.value
    }

    this.setState(state)
  }

  async createNotice() {
    try {
      const { title, content } = this.state

      if (!title) throw new Error('제목을 입력해주세요.')
      if (!content) throw new Error('내용을 입력해주세요.')

      await AdminNoticeActions.createNotice(this.state)

      alert('추가되었습니다.')

      this.setState({
        title: '',
        content: ''
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }
  render() {
    return (
      <AdminNoticeNewComponent
        state={this.state}
        handleChange={this.handleChange}
        createNotice={this.createNotice.bind(this)}
      />
    )
  }
}

export default AdminNoticeNewContainer
