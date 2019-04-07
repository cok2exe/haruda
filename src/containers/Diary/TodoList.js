import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import DiaryTodoListActions from '@/actions/DiaryTodoList'

import DiaryTodoListComponent from '@/components/Diary/TodoList'
import DiaryTodoListPopup from '@/components/Diary/Popups/TodoList'

@inject('authStore')
@observer
export default class DiaryTodoListContainer extends Component {
  state = {
    todoList: [],
    completedTodoList: [],

    todo: null,
    isEditMode: false,
    isShowTodoListPopup: false
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

  openPopup = todo => {
    this.setState({
      todo: todo ? todo : { title: '' },
      isShowTodoListPopup: true,
      isEditMode: !!todo
    })
  }

  hidePopup = () => {
    this.setState({
      todo: null,
      isShowTodoListPopup: false,
      isEditMode: false
    })
  }

  handleChange = e => {
    const todo = { ...this.state.todo }
    if (e.target.name) {
      todo[e.target.name] = e.target.value
    }
    this.setState({
      todo
    })
  }

  async confirmPopup() {
    try {
      const { todo, isEditMode } = this.state
      if (!todo.title) throw new Error('제목을 입력해주세요ㅠ')

      if (isEditMode) {
        await DiaryTodoListActions.updateDiaryTodoList({ todo })
      } else {
        todo.DiaryId = this.props.diaryId
        await DiaryTodoListActions.createDiaryTodoList({ todo })
      }

      await this.getDiaryTodoList()
      this.hidePopup()
      alert(isEditMode ? '수정 되었습니다!' : '추가 되었습니다!')
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <Fragment>
        <DiaryTodoListComponent
          state={this.state}
          user={this.props.authStore.user}
          completeTodoList={this.completeTodoList.bind(this)}
          deleteDiaryTodoList={this.deleteDiaryTodoList.bind(this)}
          openPopup={this.openPopup}
        />
        {this.state.isShowTodoListPopup && (
          <DiaryTodoListPopup
            state={this.state}
            handleChange={this.handleChange}
            hidePopup={this.hidePopup}
            confirmPopup={this.confirmPopup.bind(this)}
          />
        )}
      </Fragment>
    )
  }
}
