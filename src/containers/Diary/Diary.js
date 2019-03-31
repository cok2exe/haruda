import React, { Component } from 'react'

import DiaryContentsActions from '@/actions/DiaryContents'

import DiaryComponent from '@/components/Diary/Diary'

import pagination from '@/utils/pagination'

export default class DiaryContainer extends Component {
  state = {
    diaries: null,
    page: 1,
    pageSize: 10,
    startDate: '',
    endDate: '',
    title: '',
    diary: null,
    activeDiaryId: ''
  }

  async componentDidMount() {
    await this.getDiariesById()
  }

  async getDiariesById(page) {
    const { pageSize, startDate, endDate, title } = this.state
    const searchOpion = {
      DiaryId: this.props.diaryId,
      page,
      pageSize,
      startDate,
      endDate,
      title
    }

    try {
      const result = await DiaryContentsActions.getDiariesById(searchOpion)

      const calculatePagination = pagination({
        page,
        pageSize: this.state.pageSize,
        count: result.count
      })

      this.setState({
        diaries: result.rows,
        ...calculatePagination
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  async getDiaryById(id) {
    if (this.state.activeDiaryId !== id) {
      try {
        const diary = await DiaryContentsActions.getDiaryById({ id })

        this.setState({
          diary,
          activeDiaryId: id
        })
        const activeDiary = document.getElementById(`diary-${id}`)
        window.scrollTo(0, activeDiary.offsetTop - 60)
      } catch (err) {
        alert(err.errorMessage || err.message)
      }
    } else {
      this.setState({
        activeDiaryId: ''
      })
    }
  }

  render() {
    return (
      this.state.diaries && (
        <DiaryComponent
          state={this.state}
          getDiariesById={this.getDiariesById.bind(this)}
          getDiaryById={this.getDiaryById.bind(this)}
        />
      )
    )
  }
}
