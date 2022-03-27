import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './clase4/Auth'
import HomePage from './clase4/HomePage'
import NotFoundPage from './clase4/NotFoundPage'
import routes from './clase4/routes.constants'
import UserDetail from './clase4/UserDetail'
import UsersPage from './clase4/UsersPage'
import Wrapper from './clase4/Wrapper'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={routes.home}
            element={
              <Auth>
                <HomePage />
              </Auth>
            }
          />
          <Route path={routes.users} element={<UsersPage />} />
          <Route path={`${routes.users}/:id`} element={<UserDetail />} />
          <Route path={routes.notFound} element={<NotFoundPage />} />
          <Route path="*" element={<Wrapper />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
