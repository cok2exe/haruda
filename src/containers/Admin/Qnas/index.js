import React, { Component } from 'react'

import AdminQnaActions from '@/actions/Admin/Qnas'

import AdminQnasComponent from '@/components/Admin/Qnas'

import pagination from '@/utils/pagination'

class AdminQnasConatiner extends Component {
  state = {
    page: 1,
    pageSize: 20,
    count: 0,
    numberOfPages: 0,
    title: '',
    isWaitingAnswer: '',

    qnas: [],
    searchOption: {
      title: '',
      isWaitingAnswer: ''
    }
  }

  async componentDidMount() {
    await this.getQnas(1)
  }

  getQnas = async (page, isSearch) => {
    try {
      const { pageSize, title, isWaitingAnswer, searchOption } = this.state

      if (isSearch) {
        searchOption.title = title
        searchOption.isWaitingAnswer = isWaitingAnswer
      }

      const result = await AdminQnaActions.getQnas({
        page,
        pageSize,
        ...searchOption
      })

      const calculatePagination = pagination({
        page,
        pageSize,
        count: result.count
      })

      this.setState({
        qnas: result.rows,
        searchOption,
        ...calculatePagination
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  handleChange = e => {
    const state = { ...this.state }
    if (e.target.name) {
      state[e.target.name] = e.target.value
    }
    this.setState(state)
  }

  render() {
    return (
      <AdminQnasComponent
        state={this.state}
        getQnas={this.getQnas}
        handleChange={this.handleChange}
      />
    )
  }
}

export default AdminQnasConatiner
