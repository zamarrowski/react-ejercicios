import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #da4453; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #89216b, #da4453); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #89216b, #da4453);

  h1,
  label {
    color: white;
  }
`

export const LoginFormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  input {
    display: block;
  }
`
