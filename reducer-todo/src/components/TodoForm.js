import React, { useState } from "react";

const TodoForm = props => {
    const [input, setInput] = useState('');

    const changeHandler = e => {
        setInput(e.target.value)
    };

    const submitHandler = e => {
        e.preventDefault();
        props.addTodo(input);
        setInput('');
    };

    const clearTodos = () => {
        props.clearTodos();
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <input value={input} onChange={changeHandler} />
            <button>Add Todo</button>
        </form>
        <button onClick={clearTodos}>Clear Completed Todos</button>
        </>
    );
};

export default TodoForm;