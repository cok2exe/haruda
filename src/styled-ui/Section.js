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

export const Accordian = styled.div`
  cursor: pointer;
  border-bottom: 1px solid #b2bec3;

  .accordian__title {
    display: flex;
    align-items: center;
    text-align: left;
    padding: 10px;
    transition: 0.3s;

    span:first-child {
      flex: 1;
      margin-right: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    &:hover {
      background-color: #a29bfe;

      & > * {
        color: #ffffff;
      }
    }
  }

  .accordian__content {
    opacity: 0;
    visibility: hidden;
    height: 0;
    transition: 0.3s;
    text-align: left;
  }

  &.active {
    .accordian__title {
      background-color: #6c5ce7;
      & > * {
        color: #ffffff;
      }
    }
    .accordian__content {
      opacity: 1;
      visibility: visible;
      height: 300px;
      overflow-y: auto;
      padding: 10px;
    }
  }
`

export const Pagination = styled.div`
  text-align: center;
  margin: 20px 0;

  .page-btn {
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 10px;
    margin: 0 2.5px;
    cursor: pointer;

    &:hover,
    &.active {
      border: 1px solid #fff;
      background-color: #6c5ce7;
      color: #fff;
    }
  }
`
