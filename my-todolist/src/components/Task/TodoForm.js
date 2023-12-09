
import React, {useState} from 'react'

export default function TodoForm ({addTodo}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add task here...' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button type='submit'>ADD</button>
    </form>
  )
}
