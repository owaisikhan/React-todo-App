import React, { useContext, useState } from 'react'
import { GlobalState } from './context/GlobalState'
import { Todos } from './Todos'
export const Child = () => {
    const { state, addTodo, delTodo } = useContext(GlobalState)
    let [todoTitle, setTitle] = useState('')
    console.log(state)

    const formHandler = (e) => {
        e.preventDefault();
        addTodo({
            id: new Date().getTime(),
            title: todoTitle,
            time: new Date().toLocaleString()
        })
        setTitle('')
    }



    return (<div className="parent-container">
        <h6>App created using React</h6>
        <h1>My Todos</h1>

        <form onSubmit={formHandler}>
            <input type="text" placeholder="todo title" required
                value={todoTitle} onChange={e => setTitle(e.target.value.toString().trimLeft())} />
            <input type="submit" value="Add todo" />
        </form>
        <ul className="list" >
            <Todos todos={state} deleteTodo={delTodo} />
        </ul>
    </div>)
}