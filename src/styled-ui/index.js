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
`
