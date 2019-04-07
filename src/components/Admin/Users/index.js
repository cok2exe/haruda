import React from 'react'
import { SectionTitle, Button } from '@/styled-ui'

import Pagination from '@/components/Common/Pagination'

import dateFormat from '@/utils/dateFormat'

const AdminUsersComponent = ({
  state,
  getUsers,
  toggleIsAdmin,
  toggleAddAdminPopup
}) => {
  const {
    page,
    pageSize,
    count,
    numberOfPages,
    isAdmin,

    users
  } = state

  const userRows = users.map((user, index) => {
    return (
      <tr key={index}>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.name}</td>
        <td>{dateFormat(user.createdAt)}</td>
      </tr>
    )
  })

  return (
    <div className="section-admin users">
      <div className="container">
        <SectionTitle>{isAdmin ? '관리자 목록' : '회원 목록'}</SectionTitle>
        <div className="section-btn">
          {isAdmin && (
            <Button className="mr10" onClick={toggleAddAdminPopup}>
              관리자 추가
            </Button>
          )}
          <Button onClick={toggleIsAdmin}>
            {isAdmin ? '회원 목록' : '관리자 목록'}
          </Button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>이메일</th>
              <th>이름</th>
              <th>{isAdmin ? '등록일' : '가입일'}</th>
            </tr>
          </thead>
          <tbody>{userRows}</tbody>
        </table>

        {count > pageSize && (
          <Pagination
            page={page}
            numberOfPages={numberOfPages}
            prev={true}
            next={true}
            getNewPage={getUsers}
          />
        )}
      </div>
    </div>
  )
}

export default AdminUsersComponent
