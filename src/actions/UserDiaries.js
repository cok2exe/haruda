import request from '@/utils/tokenSuperagent'

import APIS from '@/apis'

export default {
  /**
   * 사용자의 다이어리 리스트 GET
   */
  getUserDiaries: async function({ page, pageSize }) {
    return new Promise((resolve, reject) =>
      request(APIS.USER_DIARIES.GET.method, APIS.USER_DIARIES.GET.path())
        .query({ page, pageSize })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  /**
   * 다이어리 권한 추가(사용자의 다이어리 리스트에 추가)
   */
  createUserDiary: async function({ DiaryId }) {
    return new Promise((resolve, reject) =>
      request(APIS.USER_DIARIES.CREATE.method, APIS.USER_DIARIES.CREATE.path())
        .send({ DiaryId })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  /**
   * 사용자가 해당 다이어리에 권한이 있는지 조회
   */
  validUserDiary: async function({ DiaryId }) {
    return new Promise((resolve, reject) =>
      request(
        APIS.USER_DIARIES.VALID_USER_DIARY.method,
        APIS.USER_DIARIES.VALID_USER_DIARY.path()
      )
        .send({ DiaryId })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  /**
   * 사용자의 다이어리 리스트에서 삭제
   */
  deleteUserDiary: async function({ DiaryId }) {
    return new Promise((resolve, reject) =>
      request(APIS.USER_DIARIES.DELETE.method, APIS.USER_DIARIES.DELETE.path())
        .send({ DiaryId })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  }
}
