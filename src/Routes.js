import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import AuthActions from '@/actions/Auth'
import { getTokenFromLocalStorage } from '@/utils/localStorage'

/* Import the components */
import AppliedRoute from './components/AppliedRoute'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import RedirectAdminRoute from './components/RedirectAdminRoute'
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
const AsyncDiaries = Loadable({
  loader: () => import('./containers/Diaries'),
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
const AsyncWithdrawal = Loadable({
  loader: () => import('./containers/MyPage/Withdrawal'),
  loading: LoadingComponent
})
const AsyncNotices = Loadable({
  loader: () => import('./containers/Notices'),
  loading: LoadingComponent
})
const AsyncQnas = Loadable({
  loader: () => import('./containers/Qnas'),
  loading: LoadingComponent
})

const AsyncAdminNotices = Loadable({
  loader: () => import('./containers/Admin/Notices'),
  loading: LoadingComponent
})

const AsyncAdminNoticeNew = Loadable({
  loader: () => import('./containers/Admin/NoticeNew'),
  loading: LoadingComponent
})

const AsyncAdminNoticeUpdate = Loadable({
  loader: () => import('./containers/Admin/NoticeUpdate'),
  loading: LoadingComponent
})

const AsyncAdminQnas = Loadable({
  loader: () => import('./containers/Admin/Qnas'),
  loading: LoadingComponent
})

const AsyncAdminQna = Loadable({
  loader: () => import('./containers/Admin/Qna'),
  loading: LoadingComponent
})

const AsyncAdminUsers = Loadable({
  loader: () => import('./containers/Admin/Users'),
  loading: LoadingComponent
})

@inject('authStore')
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
          <AppliedRoute
            exact
            path="/diaries"
            component={AsyncDiaries}
            props={this.props}
          />
          <AppliedRoute
            exact
            path="/diaries/:id"
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
          <ProtectedRoute
            exact
            path="/mypage/withdrawal"
            user={user}
            component={AsyncWithdrawal}
            props={this.props}
          />
          <AppliedRoute
            exact
            path="/notices"
            component={AsyncNotices}
            props={this.props}
          />
          <ProtectedRoute
            exact
            path="/qnas"
            user={user}
            component={AsyncQnas}
            props={this.props}
          />
          {/* 관리자 route */}
          <RedirectAdminRoute exact path="/admin" user={user} />
          <ProtectedAdminRoute
            exact
            path="/admin/notices"
            user={user}
            component={AsyncAdminNotices}
            props={this.props}
          />
          <ProtectedAdminRoute
            exact
            path="/admin/notices/new"
            user={user}
            component={AsyncAdminNoticeNew}
            props={this.props}
          />
          <ProtectedAdminRoute
            exact
            path="/admin/notices/:id"
            user={user}
            component={AsyncAdminNoticeUpdate}
            props={this.props}
          />
          <ProtectedAdminRoute
            exact
            path="/admin/qnas"
            user={user}
            component={AsyncAdminQnas}
            props={this.props}
          />
          <ProtectedAdminRoute
            exact
            path="/admin/qnas/:id"
            user={user}
            component={AsyncAdminQna}
            props={this.props}
          />
          <ProtectedAdminRoute
            exact
            path="/admin/users"
            user={user}
            component={AsyncAdminUsers}
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
