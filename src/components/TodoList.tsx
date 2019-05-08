import React from 'react';
// @ts-ignore
import {useSelector} from "react-redux";
import styled from "styled-components";
import {AppState} from "../store/reducers";
import TodoItem from "./TodoItem";
import {Todo} from "../store/reducers/todosReducer";

const List = styled.ul`
  width: 400px;
  padding: 0;
`;

const TodoList: React.FC = () => {
  const todos: Todo[] = useSelector((state: AppState) => state.todos);

  return (
      <>
        <h3>To Do List</h3>
        <List>
          {
            todos && todos.length
                ? todos.map((todo) => <TodoItem key={`${todo.id}`} todo={todo}/>)
                : "No todos, start adding!"
          }
        </List>
      </>
  )
};

export default TodoList;