import request from 'superagent'
import tokenRequest from '@/utils/tokenSuperagent'

import APIS from '@/apis'

export default {
  getDiaryTodoList: async function({ DiaryId }) {
    return new Promise((resolve, reject) =>
      request(APIS.DIARY_TODO_LIST.GET.method, APIS.DIARY_TODO_LIST.GET.path())
        .query({ DiaryId })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },
  createDiaryTodoList: async function({ todo }) {
    return new Promise((resolve, reject) =>
      tokenRequest(
        APIS.DIARY_TODO_LIST.CREATE.method,
        APIS.DIARY_TODO_LIST.CREATE.path()
      )
        .send(todo)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  updateDiaryTodoList: async function({ todo }) {
    return new Promise((resolve, reject) =>
      tokenRequest(
        APIS.DIARY_TODO_LIST.UPDATE.method,
        APIS.DIARY_TODO_LIST.UPDATE.path()
      )
        .send(todo)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  deleteDiaryTodoList: async function({ id }) {
    return new Promise((resolve, reject) =>
      tokenRequest(
        APIS.DIARY_TODO_LIST.DELETE_BY_ID.method,
        APIS.DIARY_TODO_LIST.DELETE_BY_ID.path({ id })
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  }
}
