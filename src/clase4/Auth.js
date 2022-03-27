const Auth = props => {
  if (localStorage.jwt) return props.children

  return <h1>logueate crack</h1>
}

export default Auth
