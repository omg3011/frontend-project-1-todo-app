import React, {useEffect} from 'react'
import Todo from './Todo'

const TodoList = ({todos, deleteTodo, editTodo}) => {

  if (!todos || todos.length === 0) {
    return <p>No todos available.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      ))}
    </ul>
  )
}

export default TodoList