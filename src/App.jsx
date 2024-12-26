import { useState } from 'react'

function App() {
  const [todos, setTodo] = useState([
    {
      title : "go to gym"
    }
  ])

  function addtodo(){
    setTodo([...todos, {
      title : document.getElementById('todo').value
    }]);
    document.getElementById('todo').value = ""
  }

  const deleteTodo = (index) => {
    setTodo(todos.filter((_, i) => i !== index));
  };

  return (
    <>
    <input id='todo'></input>
    <button onClick={addtodo}>Add Todo</button>

    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <div>{todo.title}</div>
          <button onClick={() => deleteTodo(index)}>delete</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
