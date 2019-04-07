import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import Routes from './Routes'
import stores from './stores'

import './styles/App.scss'
import 'react-datepicker/dist/react-datepicker.css'

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Routes />
      </Provider>
    )
  }
}
