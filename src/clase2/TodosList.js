import Loading from '../clase1/Loading'
import useFetch from './useFetch'

const TodosList = () => {
  const { loading, data } = useFetch('https://jsonplaceholder.typicode.com/todos')

  return (
    <Loading show={loading}>
      <div>{data}</div>
    </Loading>
  )
}

export default TodosList
