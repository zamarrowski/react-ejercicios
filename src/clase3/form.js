import { formIsValid } from './helpers'

const { useState } = require('react')

const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [hobbies, setHobbies] = useState([])
  const [age, setAge] = useState()

  const onSubmit = e => {
    e.preventDefault()
    console.log(username, password, hobbies, age)
  }

  const handleHobbies = e => {
    const value = e.target.value
    const checked = e.target.checked

    if (checked) {
      setHobbies(hobbies => [...hobbies, value])
    } else {
      setHobbies(hobbies => hobbies.filter(h => h !== value))
    }
  }

  const handleAge = e => {
    setAge(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={e => setUsername(e.target.value)} type="text" name="username" />
      <input onChange={e => setPassword(e.target.value)} type="password" name="password" role="password" />
      <div>
        <input onChange={handleHobbies} type="checkbox" value="basketball" />
        <label>Basketball</label>
      </div>
      <div>
        <input onChange={handleHobbies} type="checkbox" value="skate" />
        <label>Skate</label>
      </div>
      <div>
        <input onChange={handleHobbies} type="checkbox" value="art" />
        <label>Art</label>
      </div>

      <div>
        <input onChange={handleAge} name="age" type="radio" value="18" />
        <label>18</label>
      </div>
      <div>
        <input onChange={handleAge} name="age" type="radio" value="25" />
        <label>25</label>
      </div>
      <div>
        <input onChange={handleAge} name="age" type="radio" value="35" />
        <label>35</label>
      </div>
      <button disabled={!formIsValid(username, password)}>Send</button>
    </form>
  )
}

export default Form
