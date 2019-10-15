import React from 'react';
import './App.css';
import Hello from './components/Hello';
import Timer from './components/timer';
import TodoApp from './components/todo';

function App() {
  return (
    <div className="text-center">
      <Hello name='Jhon'></Hello>
      <Timer></Timer>
      <TodoApp></TodoApp>
    </div>

  );
}

export default App;
