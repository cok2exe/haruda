import request from '@/utils/tokenSuperagent'

import APIS from '@/apis'

export default {
  getNotices: async function({ page, pageSize }) {
    return new Promise((resolve, reject) =>
      request(APIS.NOTICES.GET.method, APIS.NOTICES.GET.path())
        .query({ page, pageSize })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },
  getNoticeById: async function({ id }) {
    return new Promise((resolve, reject) =>
      request(
        APIS.NOTICES.GET_BY_ID.method,
        APIS.NOTICES.GET_BY_ID.path({ id })
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  },
  createNotice: async function(notice) {
    return new Promise((resolve, reject) =>
      request(APIS.NOTICES.CREATE.method, APIS.NOTICES.CREATE.path())
        .send(notice)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },
  updateNoticeById: async function({ notice, id }) {
    return new Promise((resolve, reject) =>
      request(
        APIS.NOTICES.UPDATE_BY_ID.method,
        APIS.NOTICES.UPDATE_BY_ID.path({ id })
      )
        .send(notice)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },
  deleteNoticeById: async function(id) {
    return new Promise((resolve, reject) =>
      request(
        APIS.NOTICES.DELETE_BY_ID.method,
        APIS.NOTICES.DELETE_BY_ID.path({ id })
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  }
}
