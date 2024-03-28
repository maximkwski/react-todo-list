import { useEffect, useState } from 'react'
import './App.css'
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';


export default function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('items')
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => { //pass as a funct to use current val
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title: title, completed: false},
      ]
    })
  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <header>
        <div className="container row">
          <NewTodoForm onSubmit={addTodo}/>
        </div>
      </header>
      <main>
        <div className="container row">
          <h1>Todo List</h1>
          <TodoList todos={todos}
            toggleTodo={toggleTodo} deleteTodo={deleteTodo}
          />
        </div>
      </main>
    </>
  )
}
