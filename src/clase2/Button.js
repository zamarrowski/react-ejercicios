import styled, { css } from 'styled-components'

const Button = styled.button`
  padding: 1rem;
  border: 1px solid blue;
  background-color: ${props => props.theme.main};

  ${props =>
    props.success &&
    css`
      border-color: green;
    `}

  ${props =>
    props.danger &&
    css`
      border-color: red;
    `}
`

export const TomatoButton = styled(Button)`
  background-color: tomato;
`

export default Button
