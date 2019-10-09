import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/reducer";

import Todo from "./Todo"


const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodoText, setNewTodoText] = useState('');
    console.log(state);
    console.log(newTodoText);

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    };

    const addTodo = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_NEW_TODO', payload: newTodoText});
        setNewTodoText('');

};


    return (
        <div>
            <div>
            {state.map(item => {
                return(
                <Todo key={item.id} item={item} />
                )
            })}
            </div>
            <form onSubmit={addTodo}>
                <input onChange={handleChanges} type="text" placeholder="New Todo" value={newTodoText} />
                <button type="submit">Add New Todo</button>
            </form>
        </div>
    )
}




export default TodoList;