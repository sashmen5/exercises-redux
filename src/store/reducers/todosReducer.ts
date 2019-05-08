import {ADD_TODO, TodosActionTypes, TOGGLE_TODO} from "../actionTypes";

export interface Todo {
  id: number
  completed: boolean
  content: string
}

const initialState: Todo[] = [
    {id: 234, completed: true, content: 'Finish "Todo list" exercise'}
];

const todosReducer = (state = initialState, action: TodosActionTypes): Todo[] => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return [
        ...state,
        {id, content, completed: false}
      ];
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const index = state.findIndex(item => item.id === id);
      const toggledTodo: Todo = {
        ...state[index],
        completed: !state[index].completed
      };

      return [
          ...state.slice(0, index),
          toggledTodo,
          ...state.slice(index + 1)
      ]
    }
    default:
      return state;
  }
};

export default todosReducer;
