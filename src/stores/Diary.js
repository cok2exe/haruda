import { observable, action } from 'mobx'

class DiaryStore {
  @observable id = null
  @observable isValidEnter = false

  get validInfo() {
    return {
      id: this.id,
      isValidEnter: this.isValidEnter
    }
  }

  @action
  setId = id => {
    this.id = id
  }

  @action
  setIsValidEnter = isValidEnter => {
    this.isValidEnter = isValidEnter
  }
}

export default DiaryStore
