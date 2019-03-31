import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import DiaryTodoListActions from '@/actions/DiaryTodoList'

import DiaryTodoListComponent from '@/components/Diary/TodoList'

@inject('authStore')
@observer
export default class DiaryTodoListContainer extends Component {
  state = {
    todoList: [],
    completedTodoList: []
  }

  async componentDidMount() {
    await this.getDiaryTodoList()
  }

  async getDiaryTodoList() {
    try {
      const result = await DiaryTodoListActions.getDiaryTodoList({
        DiaryId: this.props.diaryId
      })

      const todoList = result.filter(row => !row.isCompleted)
      const completedTodoList = result.filter(row => row.isCompleted)

      this.setState({
        todoList,
        completedTodoList
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  async completeTodoList(todo) {
    try {
      if (window.confirm('해당 사항을 완료하셨습니까?')) {
        todo.isCompleted = true
        await DiaryTodoListActions.updateDiaryTodoList({
          todo
        })

        alert('변경되었습니다!')
        await this.getDiaryTodoList()
      }
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  async deleteDiaryTodoList(id) {
    try {
      if (window.confirm('정말 삭제하시겠습니까?')) {
        await DiaryTodoListActions.deleteDiaryTodoList({ id })

        alert('삭제되었습니다!')
        await this.getDiaryTodoList()
      }
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <DiaryTodoListComponent
        state={this.state}
        user={this.props.authStore.user}
        completeTodoList={this.completeTodoList.bind(this)}
        deleteDiaryTodoList={this.deleteDiaryTodoList.bind(this)}
      />
    )
  }
}
