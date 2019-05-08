import React from 'react';
// @ts-ignore
import {useSelector} from "react-redux";
import Todo from "./Todo";
import styled from "styled-components";

const List = styled.ul`
width: 400px;
    padding: 0;
`;

const TodoList: React.FC = () => {
  const todos: any[] = useSelector((state: any) => state.todos);

  return (
      <>
        <div>TodoList</div>
        <List>
          {
            todos && todos.length
              ? todos.map((todo) => <Todo key={`${todo.id}`} todo={todo}/>)
              : "No todos, start adding!"
          }
        </List>
      </>
  )
};

export default TodoList;