import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            // this are the default values 
            id: 1,
            todo: "this is a default todo",
            checked: false,
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleChecked: (id) => { }
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}