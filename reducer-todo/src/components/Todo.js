import React from "react";

const Todo = props => {
    console.log('Todo props',props)
    const toggleTodo = props => {
        props.toggleTodo(props.item.id)
    };
    return (
        <div>
            <div onClick={toggleTodo}>{props.todo.todo}</div>
        </div>
    );
};

export default Todo;