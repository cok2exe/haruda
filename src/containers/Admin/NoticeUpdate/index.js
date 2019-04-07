import React, { Component } from 'react'

import AdminNoticeActions from '@/actions/Admin/Notices'

import AdminNoticeUpdateComponent from '@/components/Admin/NoticeUpdate'

class AdminNoticeUpdateContainer extends Component {
  state = {
    title: '',
    content: ''
  }

  async componentDidMount() {
    await this.getNoticeById()
  }

  async getNoticeById() {
    try {
      const notice = await AdminNoticeActions.getNoticeById({
        id: this.props.match.params.id
      })

      this.setState({
        title: notice.title,
        content: notice.content
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
      this.props.history.push('/admin/notices')
    }
  }

  handleChange = e => {
    const state = { ...this.state }

    if (e.target.name) {
      state[e.target.name] = e.target.value
    }

    this.setState(state)
  }

  async updateNoticeById() {
    try {
      const { title, content } = this.state

      if (!title) throw new Error('제목을 입력해주세요.')
      if (!content) throw new Error('내용을 입력해주세요.')

      await AdminNoticeActions.updateNoticeById({
        notice: this.state,
        id: this.props.match.params.id
      })

      alert('수정되었습니다.')

      await this.getNoticeById()
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }
  render() {
    return (
      <AdminNoticeUpdateComponent
        state={this.state}
        handleChange={this.handleChange}
        updateNoticeById={this.updateNoticeById.bind(this)}
      />
    )
  }
}

export default AdminNoticeUpdateContainer
