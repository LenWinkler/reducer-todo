import React from 'react';


import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>React App with useReducer Hook</h1>
      <h2>My Todos: </h2>
      <TodoList />
    </div>
  );
}

export default App;
