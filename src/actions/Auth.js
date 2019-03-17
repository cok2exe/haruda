import request from 'superagent'

import APIS from '@/apis'

export default {
  login: async function({ email, password }) {
    return new Promise((resolve, reject) =>
      request(APIS.AUTH.LOGIN.method, APIS.AUTH.LOGIN.path())
        .send({ email, password })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  signup: async function({ email, password, name }) {
    return new Promise((resolve, reject) =>
      request(APIS.AUTH.SIGNUP.method, APIS.AUTH.SIGNUP.path())
        .send({ email, password, name })
        .end((err, res) => {
          if (err) reject(res)
          else resolve(res)
        })
    )
  }
}
