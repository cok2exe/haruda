import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import AuthActions from '@/actions/Auth'
import { getTokenFromLocalStorage } from '@/utils/localStorage'

/* Import the components */
import AppliedRoute from './components/AppliedRoute'
import ProtectedRoute from './components/ProtectedRoute'
import LoadingComponent from './components/LoadingComponent'

const AsyncHome = Loadable({
  loader: () => import('./containers/Home'),
  loading: LoadingComponent
})
const AsyncSignup = Loadable({
  loader: () => import('./containers/Signup'),
  loading: LoadingComponent
})
const AsyncLogin = Loadable({
  loader: () => import('./containers/Login'),
  loading: LoadingComponent
})
const AsyncFindPassword = Loadable({
  loader: () => import('./containers/FindPassword'),
  loading: LoadingComponent
})
const AsyncDiary = Loadable({
  loader: () => import('./containers/Diary'),
  loading: LoadingComponent
})
const AsyncMyPage = Loadable({
  loader: () => import('./containers/MyPage'),
  loading: LoadingComponent
})
const AsyncChangePw = Loadable({
  loader: () => import('./containers/MyPage/ChangePw'),
  loading: LoadingComponent
})

@inject('authStore', 'sampleMobxStore')
@observer
export default class RouterContainer extends Component {
  state = {
    initRender: false
  }

  async componentDidMount() {
    if (getTokenFromLocalStorage()) {
      const result = await AuthActions.authToken({
        token: getTokenFromLocalStorage()
      })

      this.props.authStore.setUser(result)
      this.setState({
        initRender: true
      })
    } else {
      this.setState({
        initRender: true
      })
    }
  }

  render() {
    const { user } = this.props.authStore
    const { initRender } = this.state

    return initRender ? (
      <Router>
        <Switch>
          <AppliedRoute
            exact
            path="/"
            component={AsyncHome}
            props={this.props}
          />
          <AppliedRoute
            exact
            path="/signup"
            component={AsyncSignup}
            props={this.props}
          />
          <AppliedRoute
            exact
            path="/login"
            component={AsyncLogin}
            props={this.props}
          />
          <AppliedRoute
            exact
            path="/find-password"
            component={AsyncFindPassword}
            props={this.props}
          />
          <ProtectedRoute
            exact
            path="/diary"
            user={user}
            component={AsyncDiary}
            props={this.props}
          />
          <ProtectedRoute
            exact
            path="/mypage"
            user={user}
            component={AsyncMyPage}
            props={this.props}
          />
          <ProtectedRoute
            exact
            path="/mypage/change-pw"
            user={user}
            component={AsyncChangePw}
            props={this.props}
          />

          {/* Finally, catch all unmatched routes */}
          {/* <Route component={AsyncNotFound} /> */}
        </Switch>
      </Router>
    ) : (
      <LoadingComponent />
    )
  }
}
