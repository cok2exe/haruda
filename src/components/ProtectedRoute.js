import React from 'react'
import { Redirect } from 'react-router-dom'

import AppliedRoute from '@/components/AppliedRoute'

export default ({ token: t, component: C, props: cProps, type, ...rest }) => {
  if (t) {
    return <AppliedRoute {...rest} component={C} props={cProps} />
  } else {
    return <Redirect to="/login" />
  }
}
