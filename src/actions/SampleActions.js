import request from 'superagent'

import * as types from '../constants'
import APIS from '../apis'

import AuthStore from '@/stores/Auth'
const authStore = new AuthStore()

export default {
  getUsers: function() {
    return new Promise((resolve, reject) =>
      request(APIS.USERS.GET_USERS.METHOD, APIS.USERS.GET_USERS.PATH()).end(
        (err, res) => {
          if (err) reject(res.body || err)
          else {
            authStore.setUser(res.body)
            // return authStore.getUser

            resolve(res.body)
          }
        }
      )
    )
  }
}
