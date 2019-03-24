import request from 'superagent'

import APIS from '@/apis'

export default {
  searchDiaryById: async function({ diaryId }) {
    return new Promise((resolve, reject) =>
      request(
        APIS.DIARIES.SEARCH_BY_ID.method,
        APIS.DIARIES.SEARCH_BY_ID.path()
      )
        .query({ diaryId })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  }
}
