import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import WithdrawalComponent from '@/components/MyPage/Withdrawal'

import UserActions from '@/actions/User'

import { removeTokenFromLocalStorage } from '@/utils/localStorage'

@inject('authStore')
@observer
export default class WithDrawalContainer extends Component {
  withdrawal = async () => {
    try {
      await UserActions.withdrawal()
      this.props.authStore.setUser(null)
      removeTokenFromLocalStorage()

      alert('회원 탈퇴되었습니다. 이용해 주셔서 감사합니다.')
      this.props.history.push('/')
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }
  render() {
    return <WithdrawalComponent withdrawal={this.withdrawal} />
  }
}
