import SampleMobxStore from './SampleMobx'
import AuthStore from './Auth'
import DiaryStore from './Diary'

const sampleMobxStore = new SampleMobxStore()
const authStore = new AuthStore()
const diaryStore = new DiaryStore()

export default {
  sampleMobxStore,
  authStore,
  diaryStore
}
