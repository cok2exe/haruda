/**
 * Section common ui
 */
import styled, { css } from 'styled-components'

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

export const UserProfile = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  background-image: url('/images/common/icon_user.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #fafafa;

  border: 0;
  outline: 0;
  padding: 0;

  cursor: pointer;

  ${props =>
    props.small &&
    css`
      width: 30px;
      height: 30px;
    `};
`
