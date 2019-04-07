import React from 'react'
import { Route } from 'react-router-dom'
import NavbarContainer from '@/containers/Common/Navbar'
import FooterComponent from '@/components/Common/Footer'

export default ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props => [
      <NavbarContainer key="navbar" {...cProps} {...props} {...rest} />,
      <div className="user-body" key="body">
        <C {...props} {...cProps} />
      </div>,
      <FooterComponent key="footer" />
    ]}
  />
)
