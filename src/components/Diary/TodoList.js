import React, { Component } from 'react'

import { UserProfile, Button } from '@/styled-ui'
import dateFormat from '@/utils/dateFormat'

export default class DiaryTodoListComponent extends Component {
  render() {
    const { todoList, completedTodoList } = this.props.state
    const {
      user,
      completeTodoList,
      deleteDiaryTodoList,
      openPopup
    } = this.props

    const todoListRows = todoList.map((todo, index) => {
      return (
        <div key={index} className="todo">
          <div className="profile">
            <UserProfile
              medium="true"
              style={{
                backgroundImage:
                  todo.User.profileImage && `url(${todo.User.profileImage})`
              }}
            />
          </div>
          <div className="content">
            <p className="title">{todo.title}</p>
            <p className="user">{`${todo.User.name} (${todo.User.email})`}</p>
            <p>추가일 : {dateFormat(todo.createdAt)}</p>
            {user.id === todo.UserId && (
              <div className="btns">
                <Button onClick={() => openPopup(todo)}>수정</Button>
                <Button onClick={() => completeTodoList(todo)}>완료</Button>
                <Button onClick={() => deleteDiaryTodoList(todo.id)}>
                  삭제
                </Button>
              </div>
            )}
          </div>
        </div>
      )
    })

    const completedTodoListRows = completedTodoList.map((todo, index) => {
      return (
        <div key={index} className="todo">
          <div className="profile">
            <UserProfile
              medium="true"
              style={{
                backgroundImage:
                  todo.User.profileImage && `url(${todo.User.profileImage})`
              }}
            />
          </div>
          <div className="content">
            <p className="title">{todo.title}</p>
            <p className="user">{`${todo.User.name} (${todo.User.email})`}</p>
            <p>완료일 : {dateFormat(todo.updatedAt)}</p>
            {user.id === todo.UserId && (
              <div className="btns">
                <Button onClick={() => deleteDiaryTodoList(todo.id)}>
                  삭제
                </Button>
              </div>
            )}
          </div>
        </div>
      )
    })

    return (
      <div className="diary__todo-list diary-list">
        <div>다이어리 투두 리스트</div>
        <div className="section-btn">
          <Button onClick={() => openPopup()}>추가</Button>
        </div>
        <div className="list-wrapper">
          <div className="list incompleted">
            To do list
            {todoListRows}
          </div>
          <div className="list completed">
            완료!!
            {completedTodoListRows}
          </div>
        </div>
      </div>
    )
  }
}
