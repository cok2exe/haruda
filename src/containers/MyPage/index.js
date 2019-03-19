import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import UserActions from '@/actions/User'
import AuthActions from '@/actions/Auth'
import FileActions from '@/actions/File'

import MyPageComponent from '@/components/MyPage'

import { getTokenFromLocalStorage } from '@/utils/localStorage'

@inject('authStore')
@observer
export default class MyPageContainer extends Component {
  state = {
    user: '',
    isEditMode: false,

    file: '',
    imgUrl: ''
  }

  async componentWillMount() {
    await this.getUser()
  }

  async getUser() {
    try {
      const user = await UserActions.getUser()
      const imgUrl = user.profileImage
      this.setState({ user, imgUrl })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  goToEditMode = () => {
    this.setState({
      isEditMode: true
    })
  }

  handleChange = e => {
    const user = { ...this.state.user }

    switch (e.target.name) {
      case 'profileImage':
        let file = e.target.files[0]
        this.readFile(file)

        user[e.target.name] = e.target.value
        break
      default:
        user[e.target.name] = e.target.value
        break
    }
    this.setState({ user })
  }

  readFile = file => {
    console.log('file', file)
    if (file) {
      let reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onloadend = () => {
        this.setState({
          file,
          imgUrl: reader.result
        })
      }
    }
  }

  async uploadImage() {
    let file = this.state.file

    try {
      const res = await FileActions.uploadImage({ file })
      return res
    } catch (err) {
      return err
    }
  }

  async updateUser() {
    const user = { ...this.state.user }

    try {
      // const imageResult = await this.uploadImage()
      // if (imageResult.status !== 200) {
      //   throw new Error('이미지 등록에 실패했습니다. 다시 시도해주세요.')
      // }

      // user.profileImage = imageResult.body.url

      console.log('user:: ', user)

      await UserActions.updateUser({
        name: user.name,
        profileImage: user.profileImage ? user.profileImage : ''
      })

      alert('회원정보 수정에 성공하였습니다.')
      await this.getUser()
      this.setState({
        isEditMode: false
      })
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      this.state.user && (
        <MyPageComponent
          //user={user}
          state={this.state}
          goToEditMode={this.goToEditMode}
          handleChange={this.handleChange}
          updateUser={this.updateUser.bind(this)}
        />
      )
    )
  }
}
