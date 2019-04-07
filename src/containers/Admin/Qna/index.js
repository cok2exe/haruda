import React, { Component } from 'react'

import AdminQnaActions from '@/actions/Admin/Qnas'

import AdminQnaComponent from '@/components/Admin/Qna'

class AdminQnaContainer extends Component {
  state = {
    qna: undefined
  }

  async componentDidMount() {
    await this.getQnaById()
  }

  getQnaById = async () => {
    try {
      const qna = await AdminQnaActions.getQnaById({
        id: this.props.match.params.id
      })

      this.setState({
        qna
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
      this.props.history.push('/admin/qnas')
    }
  }

  handleChangeAnswer = e => {
    const qna = { ...this.state.qna }

    qna.answer = e.target.value

    this.setState({
      qna
    })
  }

  createAnswer = async () => {
    try {
      if (window.confirm('답변을 등록하시겠습니까?')) {
        const qna = { ...this.state.qna }
        if (!qna.answer) throw new Error('답변을 입력해주세요.')
        await AdminQnaActions.createAnswer(qna)
        await this.getQnaById()
        alert('등록 되었습니다.')
      }
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return this.state.qna ? (
      <AdminQnaComponent
        state={this.state}
        handleChangeAnswer={this.handleChangeAnswer}
        createAnswer={this.createAnswer}
      />
    ) : (
      ''
    )
  }
}

export default AdminQnaContainer
