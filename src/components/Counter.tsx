import React from 'react';
// @ts-ignore
import { useSelector, useDispatch } from 'react-redux';
import {decrement, increment} from "../store/actions";


const Counter: React.FC = () => {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => dispatch(increment());
  const decrementCounter = () => dispatch(decrement());

  return (
    <div>
        <h1>Counter</h1>
        <div>{counter}</div>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
    </div>
  )
};

export default Counter;