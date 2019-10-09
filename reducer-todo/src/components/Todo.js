import React from "react";

const Todo = props => {
    return (
        <div>
            <p onClick={props.toggleCompleted}>{props.item.item}</p>
        </div>
    )
}

export default Todo;