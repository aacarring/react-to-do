import React, { useState, useRef } from 'react';
import ToDoList from './ToDoList';
import uuidv4 from 'uuid/v4';

function App() {
  const [toDos, setToDos] = useState([]);
  const toDoNameRef = useRef();

  function handleAddToDo(e) {
    const name = toDoNameRef.current.value;
    if (name === "") return;
    setToDos(prevToDos => {
      return [...prevToDos, {id: 1, name: name, complete: false}]
    });
    toDoNameRef.current.value = null;
   }

  return (
    <div>
      <ToDoList toDos={toDos}/>
      <input ref={toDoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add To-Do</button>
      <button>Clear Completed</button>
      <div>0 left to do.</div>
    </div>
  )
}

export default App;
