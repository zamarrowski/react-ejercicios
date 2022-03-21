export const formIsValid = (username, password) => {
  console.log(username, password)
  return username && password && password.length >= 8
}
