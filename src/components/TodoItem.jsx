import React, { useState } from 'react'
import { useTodo } from '../contexts/Todo'

const TodoItem = ({ todo }) => {

    console.log(todo.todo);
    const { deleteTodo, updateTodo, toggleChecked } = useTodo()
    const [isEditable, setisEditable] = useState(false)
    const [todomsg, setTodomsg] = useState(todo.todo)


    const removeTodo = () => {
        deleteTodo(todo.id)
    }

    const changeCheck = () => {
        toggleChecked(todo.id)
    }

    const changeTodo = () => {
        updateTodo({ ...todo, todo: todomsg })
        setisEditable(false)
    }


    return (
        <>
            <div className="flex justify-evenly items-center bg-slate-700 mx-20 my-5 p-3 rounded-lg">
                <input type="checkbox"
                    defaultChecked={todo.checked}
                    onChange={changeCheck}
                />
                <input type="text"
                    className={`${todo.checked ? "line-through text-black" : ""} w-3/5 h-10 rounded-md text-black`}
                    readOnly={!isEditable}
                    value={todomsg}
                    onChange={(e) => setTodomsg(e.target.value)}
                />
                <button type="button"
                    onClick={() => {
                        if (todo.checked) {
                            changeTodo();
                        }
                        else {
                            setisEditable((prev) => !prev)
                        }
                    }}
                    disabled={todo.checked}
                    className={`${todo.checked ? "opacity-60" : ""}`}
                > {isEditable ? "📂" : "✏️"}</button>
                <button type="button" onClick={removeTodo}>❌</button>
            </div>
        </>
    )
}

export default TodoItem
