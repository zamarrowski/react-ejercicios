import './App.css'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [colors, setColors] = useState(['yellow', 'red'])

  const handleChange = event => {
    setText(event.target.value.replace('a', 'b'))
  }

  const onAddColor = () => {
    setColors([...colors, 'blue'])
  }

  return (
    <>
      <input value={text} type="text" onChange={handleChange} />
      <h1>{text}</h1>
      <h2>{colors.join(',')}</h2>
      <button onClick={onAddColor}>Add color</button>
    </>
  )
}

export default App
