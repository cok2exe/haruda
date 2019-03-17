/**
 * styled ui
 */
import styled, { css } from 'styled-components'

export const Button = styled.button`
  background-color: ${props =>
    props.blue ? '#0984e3' : props.red ? '#d63031' : '#6c5ce7'};
  color: #ffffff;
  padding: 10px;
  font-size: 15px;
  min-width: 60px;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    vertical-align: middle;
  }

  ${props =>
    props.icon &&
    css`
      padding-right: 35px;
      background-repeat: no-repeat;
      background-position: center right 10px;
      background-image: url('/images/common/icon_${props.icon_name}.png');
      background-size: 20px;
    `};
`

export const FormGroup = styled.div`
  margin: 0 0 15px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const FormControl = styled.input`
  border-radius: 3px;
  border: 1px solid #636e72;
  padding: 0 10px;
  height: 34px;
  font-size: 15px;
  outline: 0;
  width: 100%;
`

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
