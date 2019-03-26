import React, { Component, Fragment } from 'react'
import { Pagination } from '@/styled-ui'

class PaginationComponent extends Component {
  render() {
    const { page, numberOfPages, prev, next, getNewPage } = this.props

    const pageButton = []

    if (numberOfPages < 6) {
      for (let i = 1; i <= numberOfPages; i++) {
        pageButton.push(
          <span
            key={i}
            className={`page-btn ${page === i ? 'active' : ''}`}
            onClick={() => getNewPage(i)}
          >
            {i}
          </span>
        )
      }
    } else if (page < 3) {
      for (let i = 1; i <= 5; i++) {
        pageButton.push(
          <span
            key={i}
            className={`page-btn ${page === i ? 'active' : ''}`}
            onClick={() => getNewPage(i)}
          >
            {i}
          </span>
        )
      }
    } else if (page >= numberOfPages - 2) {
      for (let i = numberOfPages - 4; i <= numberOfPages; i++) {
        pageButton.push(
          <span
            key={i}
            className={`page-btn ${page === i ? 'active' : ''}`}
            onClick={() => getNewPage(i)}
          >
            {i}
          </span>
        )
      }
    } else {
      for (let i = page - 2; i <= page + 2; i++) {
        pageButton.push(
          <span
            key={i}
            className={`page-btn ${page === i ? 'active' : ''}`}
            onClick={() => getNewPage(i)}
          >
            {i}
          </span>
        )
      }
    }

    return (
      <Pagination>
        {prev && (
          <Fragment>
            <span className="page-btn prev" onClick={() => getNewPage(1)}>
              &#60;&#60;
            </span>
            <span
              className="page-btn prev"
              onClick={() => page !== 1 && getNewPage(page - 1)}
            >
              &#60;
            </span>
          </Fragment>
        )}
        {pageButton}
        {next && (
          <Fragment>
            <span
              className="page-btn prev"
              onClick={() => page !== 1 && getNewPage(page - 1)}
            >
              &#62;
            </span>
            <span
              className="page-btn next"
              onClick={() => getNewPage(numberOfPages)}
            >
              &#62;&#62;
            </span>
          </Fragment>
        )}
      </Pagination>
    )
  }
}

export default PaginationComponent
