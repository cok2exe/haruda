import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('authStore', 'sampleMobxStore')
@observer
export default class SampleContainer extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
    )
  }
}
