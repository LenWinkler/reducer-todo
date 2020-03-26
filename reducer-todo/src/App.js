import React, { useReducer } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { reducer, initialState } from "./reducers/reducer";

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const addTodo = todo => {
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    });
  };

  const toggleTodo = id => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id
    });
  };

  const clearTodos = () => {
    dispatch({
      type: 'CLEAR_TODOS'
    });
  };

  return (
    <div className="App">
      <h1>My Todos: </h1>
      <TodoForm  addTodo={addTodo} clearTodos={clearTodos} />
      <TodoList todos={state.todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
