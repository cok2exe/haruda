import request from 'superagent'

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
  }
}
