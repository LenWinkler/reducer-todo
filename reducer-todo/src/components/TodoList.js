import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/reducer";

const TodoList = () => {
    const [{ item, completed, id }, dispatch] = useReducer(reducer, initialState);
    const [newTodoText, setNewTodoText] = useState('');


    return (
        <div>
            
        </div>
    )
}


export default TodoList;