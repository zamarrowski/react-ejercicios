import Button from '../components/Button/Button'
import * as Styles from './styles'

const LoginForm = ({ onChangeEmail, onChangePassword, onSubmit }) => {
  return (
    <div>
      <h1>Login</h1>
      <Styles.LoginFormContainer onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={onChangeEmail} type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={onChangePassword} type="password" id="password" />
        </div>
        <Button>Login</Button>
      </Styles.LoginFormContainer>
    </div>
  )
}

export default LoginForm
