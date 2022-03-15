import Loading from '../clase1/Loading'
import useFetch from './useFetch'

const UsersList = () => {
  const { loading, data } = useFetch('https://jsonplaceholder.typicode.com/users', [])

  return (
    <Loading show={loading}>
      <ul>
        {data.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </Loading>
  )
}

export default UsersList
