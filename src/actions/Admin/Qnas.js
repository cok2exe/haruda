import request from '@/utils/tokenSuperagent'

import APIS from '@/apis'

export default {
  getQnas: async function(searchOption) {
    return new Promise((resolve, reject) =>
      request(APIS.ADMIN.QNAS.GET.method, APIS.ADMIN.QNAS.GET.path())
        .query(searchOption)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  getQnaById: async function({ id }) {
    return new Promise((resolve, reject) =>
      request(
        APIS.ADMIN.QNAS.GET_BY_ID.method,
        APIS.ADMIN.QNAS.GET_BY_ID.path({ id })
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  },

  createAnswer: async function(body) {
    return new Promise((resolve, reject) =>
      request(
        APIS.ADMIN.QNAS.CREATE_ANSWER.method,
        APIS.ADMIN.QNAS.CREATE_ANSWER.path()
      )
        .send(body)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  }
}
