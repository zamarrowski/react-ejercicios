import styled, { css } from 'styled-components'

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: greenyellow;

  ${props =>
    props.danger &&
    css`
      background-color: red;
      color: white;
    `}
`

export default Button
