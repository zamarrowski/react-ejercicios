import Button, { TomatoButton } from './Button'

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={todo.id}>
          <input onChange={e => props.onEdit(e, todo)} type="text" value={todo.title} />
          <TomatoButton danger onClick={() => props.onRemove(todo)}>
            Delete
          </TomatoButton>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
