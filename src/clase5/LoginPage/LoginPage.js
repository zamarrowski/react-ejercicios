import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../AppContext'
import LoginForm from './LoginForm'
import * as Styles from './styles'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigate()
  const context = useContext(AppContext)

  const onSubmit = e => {
    e.preventDefault()
    if (email === 'success@success.com' && password === '123') {
      localStorage.jwt = '123456'
      context.setEmail(email)
      navigation('/')
    }
  }

  return (
    <Styles.MainContainer>
      <LoginForm
        onSubmit={onSubmit}
        onChangeEmail={e => setEmail(e.target.value)}
        onChangePassword={e => setPassword(e.target.value)}
      />
    </Styles.MainContainer>
  )
}

export default LoginPage
