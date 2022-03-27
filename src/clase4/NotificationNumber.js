import AppContext from './context'

const NotificationNumber = () => {
  return (
    <span>
      <AppContext.Consumer>{context => context.notifications.length}</AppContext.Consumer>
    </span>
  )
}

export default NotificationNumber
