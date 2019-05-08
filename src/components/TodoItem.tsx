import React from 'react';
import styled from "styled-components";
// @ts-ignore
import {useDispatch} from "react-redux";
import {toggleTodo} from "../store/actions";

interface TodoProps {
  todo: any;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface TodoContentProps {
  completed: boolean;
}
const TodoContent = styled.div<TodoContentProps>`
  text-decoration: ${props => props.completed ? 'line-through' : 'none'}
  color: ${props => props.completed ? 'lightgray' : ''}
`;

const TodoItem: React.FC<TodoProps> = ({todo}: TodoProps) => {
  const dispatch = useDispatch();

  return (
      <Container>
        <TodoContent completed={todo.completed}>{todo.content}</TodoContent>
        <button onClick={() => dispatch(toggleTodo(todo.id))}>{todo.completed ? 'Start again' : 'Finish'}</button>
      </Container>
  )
};

export default TodoItem;