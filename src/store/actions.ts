import {INCREMENT, DECREMENT, ADD_TODO, TOGGLE_TODO, TodosActionTypes} from "./actionTypes";

let nextTodoId = 0;

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const addTodo = (content: string): TodosActionTypes => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = (id: number): TodosActionTypes => ({
    type: TOGGLE_TODO,
    payload: { id }
});

