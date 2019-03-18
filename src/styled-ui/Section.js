/**
 * Section common ui
 */
import styled from 'styled-components'

export const SectionTitle = styled.h1`
  margin: 0 0 30px;
`

export const SectionForm = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  max-width: 300px;
  margin: 0 auto;

  .section__form {
    max-width: 300px;
    margin-bottom: 30px;

    & > * {
      width: 100%;
    }
  }

  .section__sub {
    display: flex;
    align-items: center;

    & > * {
      font-size: 12px;
      letter-spacing: 1px;
      &:last-child {
        margin-left: auto;
      }
      img {
        width: 20px;
      }
    }
  }
`
