import request from '@/utils/tokenSuperagent'

import APIS from '@/apis'

export default {
  /**
   * 내가 등록한 QnA GET
   */
  getUserQnas: async function({ page, pageSize }) {
    return new Promise((resolve, reject) =>
      request(APIS.QNAS.GET.method, APIS.QNAS.GET.path())
        .query({ page, pageSize })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  /**
   * QnA 추가
   */
  createQna: async function({ title, question }) {
    return new Promise((resolve, reject) =>
      request(APIS.QNAS.CREATE.method, APIS.QNAS.CREATE.path())
        .send({ title, question })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  /**
   * 등록한 QnA 수정
   */
  updateQnaById: async function({ id, title, question }) {
    return new Promise((resolve, reject) =>
      request(
        APIS.QNAS.UPDATE_BY_ID.method,
        APIS.QNAS.UPDATE_BY_ID.path({ id })
      )
        .send({ title, question })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  /**
   * 등록한 QnA 삭제
   */
  deleteQnAById: async function({ id }) {
    return new Promise((resolve, reject) =>
      request(
        APIS.QNAS.DELETE_BY_ID.method,
        APIS.QNAS.DELETE_BY_ID.path({ id })
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  }
}
