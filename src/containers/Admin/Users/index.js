import React, { Component, Fragment } from 'react'

import AdminUserActions from '@/actions/Admin/Users'

import AdminUsersComponent from '@/components/Admin/Users'
import AddAdminPopup from '@/components/Admin/Users/addAdminPopup'

import pagination from '@/utils/pagination'
import { checkEmail, passwordValidation } from '@/utils/validation'

class AdminUsersContainer extends Component {
  state = {
    page: 1,
    pageSize: 20,
    count: 0,
    numberOfPages: 0,
    isAdmin: false,

    users: [],
    admin: {
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    },
    isShowAddAdminPopup: false
  }

  async componentDidMount() {
    await this.getUsers(1)
  }

  getUsers = async page => {
    const { pageSize, isAdmin } = this.state

    const result = await AdminUserActions.getUsers({
      page,
      pageSize,
      isAdmin
    })

    const calculatePagination = pagination({
      page,
      pageSize,
      count: result.count
    })

    this.setState({
      users: result.rows,
      ...calculatePagination
    })
  }

  toggleIsAdmin = () => {
    this.setState(
      {
        isAdmin: !this.state.isAdmin
      },
      async () => {
        await this.getUsers(1)
      }
    )
  }

  handleChangeForNewAdmin = e => {
    const admin = { ...this.state.admin }
    if (e.target.name) {
      admin[e.target.name] = e.target.value
    }
    this.setState({ admin })
  }

  toggleAddAdminPopup = () => {
    this.setState({
      admin: {
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
      },
      isShowAddAdminPopup: !this.state.isShowAddAdminPopup
    })
  }

  addAdmin = async () => {
    try {
      const admin = { ...this.state.admin }
      if (!checkEmail(admin.email)) {
        throw new Error('이메일 형식에 맞게 입력해주세요.')
      }
      if (admin.password !== admin.confirmPassword) {
        throw new Error('비밀번호가 일치하지 않습니다.')
      }
      if (!passwordValidation(admin.password)) {
        throw new Error(
          '비밀번호는 특수문자를 포함해서 8자리 이상으로 입력해주세요.'
        )
      }
      if (!admin.name) {
        throw new Error('이름을 입력해주세요.')
      }

      await AdminUserActions.addAdmin(admin)
      await this.getUsers(1)
      this.toggleAddAdminPopup()
      alert('관리자가 추가되었습니다.')
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <Fragment>
        <AdminUsersComponent
          state={this.state}
          getUsers={this.getUsers}
          toggleIsAdmin={this.toggleIsAdmin}
          handleChangeForNewAdmin={this.handleChangeForNewAdmin}
          toggleAddAdminPopup={this.toggleAddAdminPopup}
        />
        {this.state.isShowAddAdminPopup && (
          <AddAdminPopup
            admin={this.state.admin}
            toggleAddAdminPopup={this.toggleAddAdminPopup}
            handleChangeForNewAdmin={this.handleChangeForNewAdmin}
            addAdmin={this.addAdmin}
          />
        )}
      </Fragment>
    )
  }
}

export default AdminUsersContainer
