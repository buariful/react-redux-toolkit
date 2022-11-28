import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  incrementByAmount,
  reset,
} from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> count: {count}</h2>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        increase 5
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default CounterView;
