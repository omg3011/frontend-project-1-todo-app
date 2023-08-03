import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({addTodo}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      text: input
    });  
    setInput('');
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder='Input something'
        value={input}
        onChange={handleInputChange}
      >
      </input>
      <button onClick={handleSubmit}>
        Add
      </button>
    </form>
  )
}

export default TodoInput