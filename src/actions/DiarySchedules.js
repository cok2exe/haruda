import request from 'superagent'
import tokenRequest from '@/utils/tokenSuperagent'

import APIS from '@/apis'

export default {
  getDiarySchedules: async function({ DiaryId }) {
    return new Promise((resolve, reject) =>
      request(APIS.DIARY_SCHEDULES.GET.method, APIS.DIARY_SCHEDULES.GET.path())
        .query({ DiaryId })
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },
  createDiarySchedule: async function({ schedule }) {
    return new Promise((resolve, reject) =>
      tokenRequest(
        APIS.DIARY_SCHEDULES.CREATE.method,
        APIS.DIARY_SCHEDULES.CREATE.path()
      )
        .send(schedule)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  updateDiarySchedule: async function({ schedule }) {
    return new Promise((resolve, reject) =>
      tokenRequest(
        APIS.DIARY_SCHEDULES.UPDATE.method,
        APIS.DIARY_SCHEDULES.UPDATE.path()
      )
        .send(schedule)
        .end((err, res) => {
          if (err) reject(res.body)
          else resolve(res.body)
        })
    )
  },

  deleteDiarySchedule: async function({ id }) {
    return new Promise((resolve, reject) =>
      tokenRequest(
        APIS.DIARY_SCHEDULES.DELETE_BY_ID.method,
        APIS.DIARY_SCHEDULES.DELETE_BY_ID.path({ id })
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  }
}
