import { useState } from 'react'
import Button from './Button'
import { removeItem } from './helpers'
import Layout from './Layout'
import TodoList from './TodoList'

const ListContainer = () => {
  const [todos, setTodos] = useState([{ id: 1, title: 'Sacar al perro' }])
  const [text, setText] = useState('')

  const onAddTodo = e => {
    setTodos(todos => [...todos, { id: crypto.randomUUID(), title: text }])
    setText('')
  }

  const handleChange = e => {
    setText(e.target.value)
  }

  const onRemove = todo => {
    setTodos(todos => removeItem(todos, todo.id))
  }

  const onEditTodo = (e, todo) => {
    const newTodos = todos.map(t => {
      if (t.id === todo.id) t.title = e.target.value
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <>
      <Layout>
        <div>
          <input value={text} onChange={handleChange} type="text" />
          <Button success onClick={onAddTodo}>
            Add task
          </Button>
        </div>
        <TodoList todos={todos} onRemove={onRemove} onEdit={onEditTodo} />
      </Layout>
    </>
  )
}

export default ListContainer
