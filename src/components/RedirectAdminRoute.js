import React from 'react'
import { Redirect } from 'react-router-dom'

export default ({ user }) => {
  if (user && user.isAdmin) {
    return <Redirect to="/admin/users" />
  } else {
    return <Redirect to="/login" />
  }
}
