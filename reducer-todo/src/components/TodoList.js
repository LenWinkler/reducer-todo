import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log('todolist props', props)
    return (
        <div>
            {props.todos.map(item => (
                <Todo key={item.id} todo={item} toggleTodo={props.toggleTodo} />
            ))}
        </div>
    );
};

export default TodoList;