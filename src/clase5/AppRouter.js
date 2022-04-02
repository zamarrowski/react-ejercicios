import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage'

const AuthRoute = ({ children }) => {
  if (localStorage.jwt) return children

  return <Navigate to="/login" />
}

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter
