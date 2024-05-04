import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import { TodoContextProvider } from './contexts/Todo'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggleChecked = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((prev) => prev.id === id ? { ...todo, todo: todo } : prevTodos))
  }




  return (
    <>
      <h1 className='text-center font-bold text-lg'>Todo App with context API</h1>

      <TodoContextProvider value={{ addTodo, deleteTodo, todos, toggleChecked, updateTodo }}>
        <div className="main">
          <div className="form">
            <TodoInput />
          </div>
          <div className="list w-full">
            {
              todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
              ))
            }
          </div>
        </div>
      </TodoContextProvider>
    </>
  )
}

export default App
