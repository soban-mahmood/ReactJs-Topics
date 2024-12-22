import React from "react";
import { useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    if (action.type === "action") {
      return {
        age: state.age + 1,
      };
    }
  };

  const [state, dispatch] = useReducer(reducer, { age: 24 });
  console.log(state);
  return (
    <div>
      <button onClick={() => dispatch({ type: "action" })}>{state.age}</button>
    </div>
  );
};

export default App;
