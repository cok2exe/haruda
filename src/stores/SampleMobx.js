// Sample Mobx store

import { observable, action, toJS } from 'mobx'

class SampleMobxStore {
  @observable todos = []

  @action
  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    })
  }

  @action
  removeTodo = index => {
    const todos = toJS(this.todos)

    todos.splice(index, 1)

    this.todos = todos
  }
}

export default SampleMobxStore
