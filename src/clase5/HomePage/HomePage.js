import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../AppContext'
import Button from '../components/Button/Button'
import * as Styles from './styles'

const HomePage = () => {
  const context = useContext(AppContext)
  const navigation = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigation('/login')
  }

  return (
    <>
      <Styles.Header>
        <div>My app</div>
        <div>
          <div>{context.email}</div>
          <Button onClick={logout} danger>
            logout
          </Button>
        </div>
      </Styles.Header>
    </>
  )
}

export default HomePage
