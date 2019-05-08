import React, {useState} from 'react';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
      <div>
          <h1>Counter</h1>
          <div>{counter}</div>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
  )
};

export default Counter;
