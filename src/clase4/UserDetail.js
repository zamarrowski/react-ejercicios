import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import routes from './routes.constants'

const UserDetail = () => {
  const { id } = useParams()
  const navigation = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8000/users/${id}`).then(res => {
      if (res.status === 400) navigation(routes.notFound)
    })
  }, [id, navigation])

  return (
    <>
      <h1>User detail</h1>
      <p>El id del usuario es: {id}</p>
    </>
  )
}

export default UserDetail
