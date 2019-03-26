import React, { Component } from 'react'

import {
  SectionTitle,
  UserProfile,
  FormGroup,
  FormControl,
  Button
} from '@/styled-ui'

import './style.scss'

export default class MyPageComponent extends Component {
  render() {
    const { user, imgUrl, file, isEditMode } = this.props.state
    const { goToEditMode, handleChange, updateUser } = this.props

    return (
      <div className="section-mypage">
        <div className="container">
          <SectionTitle>마이페이지</SectionTitle>
          <div className="mypage__profile">
            <div className="mypage__form">
              {isEditMode && (
                <FormControl
                  type="file"
                  accept="image/*"
                  name="profileImage"
                  value={file}
                  onChange={handleChange}
                />
              )}
              <UserProfile
                style={{
                  backgroundImage: imgUrl && `url(${imgUrl})`
                }}
              />
              <FormGroup>
                <FormControl
                  type="text"
                  name="email"
                  value={user.email}
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  name="name"
                  value={user.name}
                  disabled={!isEditMode}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div className="mypage__btns">
              <Button onClick={!isEditMode ? goToEditMode : updateUser}>
                {!isEditMode ? '프로필 수정하기' : '프로필 수정 완료'}{' '}
                <img src="/images/common/icon_love.png" alt="edit" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
