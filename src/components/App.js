
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState("")

  const addTodo = () => {
      if(input){
           setTodoList([...todoList, input])
           setInput("")
      }
  }

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((todo,i) => i !== index))
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <input value={input} placeholder="enter task" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
        <div>
            <ul>
              {
                todoList.map((todo, index) => <li key={index}>{todo}<button onClick={() => deleteTodo(index)}>Delete</button></li>)
              }
            </ul>
        </div>

    </div>
  )
}

export default App
