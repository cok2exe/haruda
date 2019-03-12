import { observable, action } from 'mobx'

class AuthStore {
  @observable user = null

  get getUser() {
    return this.user
  }

  @action
  setUser = user => {
    this.user = user
  }

  @action
  removeUser = () => {
    this.user = null
  }
}

export default AuthStore
