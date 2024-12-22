import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./components/counterSlice";
import "./App.css";
import Navbar from "./components/Navbar";
const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar/>
      <button onClick={() => dispatch(increment())}>+</button>
      this is {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;
