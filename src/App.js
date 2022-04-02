import { useState } from 'react'
import AppContext from './clase5/AppContext'
import AppRouter from './clase5/AppRouter'

function App() {
  const [email, setEmail] = useState('')

  return (
    <>
      <AppContext.Provider value={{ email, setEmail }}>
        <AppRouter />
      </AppContext.Provider>
    </>
  )
}

export default App
