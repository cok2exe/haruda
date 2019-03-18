import request from '@/utils/tokenSuperagent'

import APIS from '@/apis'

export default {
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
