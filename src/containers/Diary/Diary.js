import React, { Component } from 'react'

import DiaryContentsActions from '@/actions/DiaryContents'

import DiaryComponent from '@/components/Diary/Diary'

export default class DiaryContainer extends Component {
  state = {
    diaries: null,
    page: 1,
    pageSize: 10,
    startDate: '',
    endDate: '',
    title: ''
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
      console.log(result)
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }
  render() {
    return <DiaryComponent />
  }
}
