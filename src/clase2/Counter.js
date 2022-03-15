import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count => count + 1)
  }

  const decrement = () => {
    setCount(count => count - 1)
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter
