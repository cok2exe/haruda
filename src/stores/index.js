import SampleMobxStore from './SampleMobx'
import AuthStore from './Auth'

const sampleMobxStore = new SampleMobxStore()
const authStore = new AuthStore()

export default {
  sampleMobxStore,
  authStore
}
