import React from 'react'

const AppContext = React.createContext({ notifications: [], removeNotification: () => {} })

export default AppContext
