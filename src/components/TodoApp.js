import React, { useState, useEffect } from 'react'
import TodoTitle from './TodoTitle'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {

  //-- Data
  const [todos, setTodos] = useState([]);

  //-- Functionability
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    setTodos([todo, ...todos])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  }

  const editTodo = (newId, newText) => {
    setTodos(prev => prev.map(item => {
      if(item.id === newId) {
        return {...item, text: newText};
      }
      return item;
    }));
  }

  return (
    <>
      <TodoTitle />
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </>
  )
}

export default TodoApp