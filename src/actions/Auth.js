import request from 'superagent'

import APIS from '@/apis'

export default {
  authToken: async function({ token }) {
    return new Promise((resolve, reject) =>
      request(APIS.AUTH.AUTH_TOKEN.method, APIS.AUTH.AUTH_TOKEN.path())
        .set('x-access-token', token)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  /**
   * 로그인
   */
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

  /**
   * 회원가입
   */
  signup: async function({ email, password, name }) {
    return new Promise((resolve, reject) =>
      request(APIS.AUTH.SIGNUP.method, APIS.AUTH.SIGNUP.path())
        .send({ email, password, name })
        .end((err, res) => {
          if (err) reject(res)
          else resolve(res)
        })
    )
  },

  /**
   * 비밀번호 찾기
   */
  findPassword: async function({ email, name }) {
    return new Promise((resolve, reject) =>
      request(APIS.AUTH.FIND_PASSWORD.method, APIS.AUTH.FIND_PASSWORD.path())
        .send({ email, name })
        .end((err, res) => {
          if (err) reject(res)
          else resolve(res)
        })
    )
  }
}
