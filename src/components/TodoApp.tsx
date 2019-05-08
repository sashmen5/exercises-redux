import React from 'react';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp: React.FC = () => {
  return (
      <>
      <h1>Todo App</h1>
        <AddTodo/>
        <TodoList/>
      </>
  )
};

export default TodoApp;