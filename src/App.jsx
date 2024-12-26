import { useState } from 'react'

function App() {
  const [todos, setCount] = useState([
    {
      title : "go to gym"
    }
  ])

  function addtodo(){
    setCount([...todos, {
      title : document.getElementById('todo').value
    }]);
    document.getElementById('todo').value = ""
  }

  return (
    <>
    <input id='todo'></input>
    <button onClick={addtodo}>Add Todo</button>

    <div>
        {todos.map((todo, index) => (<p>{todo.title}</p>))}
    </div>
    </>
  )
}

export default App
