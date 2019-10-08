import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/reducer";

import Todo from "./Todo"

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodoText, setNewTodoText] = useState('');
    console.log(state)

    return (
        <div>
            {state.map(item => {
                return(
                <Todo key={item.id}item={item} />
                )
            })}
        </div>
    )
}


export default TodoList;