import React, { Component, Fragment } from 'react'

import QnasAction from '@/actions/Qnas'

import QnasComponent from '@/components/Qnas'
import QnaPopup from '@/components/Qnas/qnaPopup'

import pagination from '@/utils/pagination'

class QnasContainer extends Component {
  state = {
    page: 1,
    pageSize: 10,
    count: 0,
    numberOfPages: 0,

    selectedId: null,
    qnas: [],

    qna: {
      title: '',
      question: ''
    },
    isEditMode: false,
    isShowQnaPopup: false
  }

  async componentDidMount() {
    await this.getUserQnas(1)
  }

  async getUserQnas(page) {
    try {
      const result = await QnasAction.getUserQnas({
        page,
        pageSize: this.state.pageSize
      })

      const calculatePagination = pagination({
        page,
        pageSize: this.state.pageSize,
        count: result.count
      })

      this.setState({
        qnas: result.rows,
        ...calculatePagination
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  toggleQnaAccordian = selectedId => {
    this.setState({
      selectedId: this.state.selectedId === selectedId ? null : selectedId
    })

    const activeQna = document.getElementById(`qna-${selectedId}`)
    window.scrollTo(0, activeQna.offsetTop - 60)
  }

  handleChange = e => {
    const qna = { ...this.state.qna }

    if (e.target.name) {
      qna[e.target.name] = e.target.value
    }

    this.setState({
      qna
    })
  }

  openQnaPopup = (e, selectedQna) => {
    e.stopPropagation()

    let qna = {
      title: '',
      question: ''
    }

    if (selectedQna) {
      qna = selectedQna
    }

    this.setState({
      qna,
      isEditMode: !!selectedQna,
      isShowQnaPopup: true
    })
  }

  hideQnaPopup = () => {
    this.setState({
      qna: {
        title: '',
        question: ''
      },
      isShowQnaPopup: false
    })
  }

  async confirmPopup() {
    try {
      const qna = { ...this.state.qna }

      if (!qna.title) throw new Error('QnA 제목을 입력주세요ㅠ')
      if (!qna.question) throw new Error('QnA 내용을 입력주세요ㅠ')

      if (this.state.isEditMode) {
        await QnasAction.updateQnaById(qna)
      } else {
        await QnasAction.createQna(qna)
      }

      await this.getUserQnas(this.state.page)
      this.hideQnaPopup()
      alert(
        this.state.isEditMode
          ? 'QnA 수정 완료되었습니다.'
          : 'QnA를 추가해주셔서 감사힙니다!!'
      )
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  async deleteQnaById(e, id) {
    e.stopPropagation()
    try {
      if (
        window.confirm(
          'QnA를 정말 삭제하시겠습니까...?\nQnA는 개발자에게 큰 힘이 됩니다!!'
        )
      ) {
        await QnasAction.deleteQnAById({ id })
        await this.getUserQnas(this.state.page)

        alert('삭제 되었습니다.')
      }
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <Fragment>
        <QnasComponent
          state={this.state}
          toggleQnaAccordian={this.toggleQnaAccordian}
          openQnaPopup={this.openQnaPopup}
          getUserQnas={this.getUserQnas.bind(this)}
          deleteQnaById={this.deleteQnaById.bind(this)}
        />
        {this.state.isShowQnaPopup && (
          <QnaPopup
            state={this.state}
            handleChange={this.handleChange}
            hideQnaPopup={this.hideQnaPopup}
            confirmPopup={this.confirmPopup.bind(this)}
          />
        )}
      </Fragment>
    )
  }
}

export default QnasContainer
