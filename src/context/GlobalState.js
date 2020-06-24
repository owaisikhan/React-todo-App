import { AppReducer } from "./AppReducer";
import React from 'react'
const { createContext, useReducer } = require("react");

const todos = [


]
export const GlobalState = createContext(todos)
export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, todos)
    return (<GlobalState.Provider value={{
        state,
        addTodo: function (todoObj) {
            dispatch({
                type: "ADD",
                payload: {
                    id: todoObj.id,
                    title: todoObj.title,
                    time: todoObj.time
                }
            })
        },
        delTodo: function (id) {
            dispatch({
                type: "DELETE",
                payload: id
            })
        }
    }}>
        {children}

    </GlobalState.Provider>
    )
}