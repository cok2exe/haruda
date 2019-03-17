import React from 'react'
import { Redirect } from 'react-router-dom'

import AppliedRoute from '@/components/AppliedRoute'

export default ({ user: u, component: C, props: cProps, type, ...rest }) => {
  if (u) {
    return <AppliedRoute {...rest} component={C} props={cProps} />
  } else {
    return <Redirect to="/login" />
  }
}
