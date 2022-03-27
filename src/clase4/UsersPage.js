import { Link } from 'react-router-dom'
import routes from './routes.constants'

const UsersPage = () => (
  <>
    <h1>Users Page</h1>
    <ul>
      <li>
        <Link to={`${routes.users}/1`}>User 1</Link>
      </li>
      <li>
        <Link to={`${routes.users}/2`}>User 2</Link>
      </li>
    </ul>
  </>
)

export default UsersPage
