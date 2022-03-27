import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import routes from './routes.constants'

const Wrapper = () => {
  const navigation = useNavigate()

  useEffect(() => {
    navigation(routes.notFound)
  }, [navigation])

  return <h1>hola</h1>
}

export default Wrapper
