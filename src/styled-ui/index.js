/**
 * styled ui
 */
import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props =>
    props.blue ? '#0984e3' : props.red ? '#d63031' : '#6c5ce7'};
  color: #ffffff;
  padding: 10px;
  font-size: 15px;
  min-width: 60px;
  border: none;
  cursor: pointer;
`

export const FormControl = styled.input`
  border-radius: 3px;
  border: 1px solid #636e72;
  padding: 0 10px;
  height: 34px;
  font-size: 15px;
  outline: 0;
`

export const FormGroup = styled.div`
  margin: 0 0 15px;

  &:last-child {
    margin-bottom: 0;
  }
`
