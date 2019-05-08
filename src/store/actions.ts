import {INCREMENT, DECREMENT, ADD_TODO, TOGGLE_TODO} from "./actionTypes";

let nextTodoId = 0;

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const addTodo = (content: string) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

