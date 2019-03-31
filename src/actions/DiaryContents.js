import request from 'superagent'

import APIS from '@/apis'

export default {
  getDiariesById: async function(searchOption) {
    return new Promise((resolve, reject) =>
      request(APIS.DIARY_CONTENTS.GET.method, APIS.DIARY_CONTENTS.GET.path())
        .query(searchOption)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  getDiaryById: async function({ id }) {
    return new Promise((resolve, reject) =>
      request(
        APIS.DIARY_CONTENTS.GET_BY_ID.method,
        APIS.DIARY_CONTENTS.GET_BY_ID.path({ id })
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  }
}
