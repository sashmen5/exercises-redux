export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {id: number, content: string};
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {id: number}
}

export type TodosActionTypes = AddTodoAction | ToggleTodoAction;