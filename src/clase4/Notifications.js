import { useContext } from 'react'
import Button from '../clase1/Button'
import AppContext from './context'

const Notifications = () => {
  const { notifications, removeNotification } = useContext(AppContext)

  return (
    <>
      {notifications.map(n => (
        <div key={n.id}>
          {n.message} <Button onClick={() => removeNotification(n.id)} label="hola" />
        </div>
      ))}
    </>
  )
}

export default Notifications
