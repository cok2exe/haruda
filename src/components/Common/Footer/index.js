import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export default class FooterComponent extends PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer__info">
            Developed by. luda{' '}
            <Link to="https://github.com/kkangil" target="_blank">
              @kkangil
            </Link>
            <span>&</span>
            <Link to="https://github.com/cok2exe" target="_blank">
              @cok2exe
            </Link>
          </div>
          <ul className="footer__reference">
            <li>
              icons by. <Link to="https://icons8.com/">icons8.com</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
