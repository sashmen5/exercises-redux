import React, {useState} from 'react';
// @ts-ignore
import {useDispatch} from "react-redux";
import {addTodo} from "../store/actions";

const AddTodo: React.FC = () => {
  const [label, setLabel] = useState<string>('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(label));
    setLabel('');
  };

  return (
      <div>
        <input
            onChange={e => setLabel(e.target.value)}
            value={label}
        />
        <button className="add-todo" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
  )
};

export default AddTodo;