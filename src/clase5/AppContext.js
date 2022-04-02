import { createContext } from 'react'

const AppContext = createContext({ email: '', setEmail: () => {} })

export default AppContext
