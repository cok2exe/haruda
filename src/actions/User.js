import request from '@/utils/tokenSuperagent'

import APIS from '@/apis'

export default {
  /**
   * 회원정보 GET
   */
  getUser: async function() {
    return new Promise((resolve, reject) =>
      request(APIS.USERS.GET.method, APIS.USERS.GET.path()).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  },

  /**
   * 회원정보 수정
   */
  updateUser: async function({ name, profileImage }) {
    return new Promise((resolve, reject) =>
      request(APIS.USERS.UPDATE.method, APIS.USERS.UPDATE.path())
        .send({ name, profileImage })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  /**
   * 비밀번호 변경
   */
  changePassword: async function({ password, newPassword }) {
    return new Promise((resolve, reject) =>
      request(APIS.USERS.PASSWORD.method, APIS.USERS.PASSWORD.path())
        .send({ password, newPassword })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res)
        })
    )
  }
}
