import { useState, useEffect } from 'react'

const Password = () => {
  let [toggle, setToggle] = useState(false)

  useEffect(() => {
    console.log('renderizado!')

    return () => console.log('adios')
  }) //componentDidUpdate

  useEffect(() => {
    console.log('ir al servidor!')
    setInterval(() => {
      console.log('holi!')
    }, 1000)

    return () => console.log('destruido!')
  }, []) //componentDidMount

  useEffect(() => {
    console.log('ha cambiado toggle')
  }, [toggle])

  const onToggle = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <>
      <input type={toggle ? 'text' : 'password'} />
      <button onClick={onToggle}>Toggle</button>
    </>
  )
}

export default Password
