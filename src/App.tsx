import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <TodoApp/>
      </header>
    </div>
  );
};

export default App;
