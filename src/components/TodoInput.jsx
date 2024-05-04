import React, { useState } from 'react'
import { useTodo } from '../contexts/Todo'

const TodoInput = () => {

    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const addList = (event) => {
        event.preventDefault()
        addTodo({ todo, checked: false })
        setTodo("")
    }


    return (
        <>
            <form onSubmit={addList}>
                <div className='w-full flex justify-evenly items-center gap-5 my-5'>
                    <input type="text"
                        placeholder='Enter Todo ...'
                        className='border border-white rounded-md h-12 w-3/4 p-3 text-black'
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="submit"
                        className='p-3 text-white font-bold bg-slate-800 rounded-md shadow-md'
                    >Add Todo</button>
                </div>
            </form>
        </>
    )
}

export default TodoInput
