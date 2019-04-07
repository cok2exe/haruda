import React from 'react'
import { Redirect } from 'react-router-dom'

import AppliedRoute from '@/components/AppliedRoute'

export default ({ user: u, component: C, props: cProps, type, ...rest }) => {
  if (u && u.isAdmin) {
    return (
      <AppliedRoute {...rest} component={C} props={cProps} isAdmin={true} />
    )
  } else {
    return <Redirect to="/login" />
  }
}
