/**
 * Form ui
 */
import styled, { css } from 'styled-components'

// buttons
export const Button = styled.button`
  background-color: ${props =>
    props.blue ? '#0984e3' : props.red ? '#d63031' : '#6c5ce7'};
  color: #ffffff;
  padding: 10px 20px;
  font-size: 15px;
  min-width: 60px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  outline: 0;

  &:hover {
    background-color: ${props =>
      props.blue ? '#74b9ff' : props.red ? '#ff7675' : '#a29bfe'};
  }

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

// link style
export const LinkButton = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

// input wrapper div
export const FormGroup = styled.div`
  margin: 0 0 15px;

  &:last-child {
    margin-bottom: 0;
  }
`

// input
export const FormControl = styled.input`
  border-radius: 3px;
  border: 1px solid #b2bec3;
  padding: 0 10px;
  height: 34px;
  font-size: 15px;
  outline: 0;
  width: 100%;
`

// export default { Button, LinkButton, FormGroup, FormControl }
