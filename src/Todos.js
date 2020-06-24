import React from 'react'
import './App.css'
export const Todos = ({ todos , deleteTodo}) => {
    return (
        todos.map((todo) => {
            return(
                <li key={todo.id}>
                    <input type="checkbox" className="checkbox" id={todo.id}/>
                    <label htmlFor={todo.id} >{todo.title}</label>
                    <input type="button" className="delete-btn" value="X" 
                    onClick={()=>{
                        deleteTodo(todo.id)
                    }}/>
                    <p className="time">
                    Added at {todo.time}
                    </p>
                    <hr/>
                </li>
            )
        })
    )
}
