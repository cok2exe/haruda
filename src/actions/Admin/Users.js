import request from '@/utils/tokenSuperagent'

import APIS from '@/apis'

export default {
  getUsers: async function(searchOption) {
    return new Promise((resolve, reject) =>
      request(APIS.ADMIN.USERS.GET.method, APIS.ADMIN.USERS.GET.path())
        .query(searchOption)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  addAdmin: async function(admin) {
    return new Promise((resolve, reject) =>
      request(
        APIS.ADMIN.USERS.ADD_ADMIN.method,
        APIS.ADMIN.USERS.ADD_ADMIN.path()
      )
        .send(admin)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  }
}
