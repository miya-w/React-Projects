// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/actions'; // Corrected path

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Despsit</button>
      <button onClick={() => dispatch(decrement())}>Withdraw</button>
    </div>
  );
};

export default Counter;
