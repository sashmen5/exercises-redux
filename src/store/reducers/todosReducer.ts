import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

export interface Todo {
  id: number
  completed: boolean
  content: string
}

const initialState: Todo[] = [
    {id: 234, completed: false, content: 'asdas'},
    {id: 2324, completed: true, content: 'asdas'},
    {id: 2334, completed: false, content: 'asdas'},
    {id: 2534, completed: false, content: 'asdas'},
];

const todosReducer = (state = initialState, action: any) => {
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
