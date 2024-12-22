import React from "react";
import { useState } from "react";

const App = () => {
  // const [button, setButton] = useState(false);

  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "John william",
      age: 25,
      email: "john@example.com",
    },
    {
      id: 2,
      name: "John Doe",
      age: 25,
      email: "john@example.com",
    },
    {
      id: 3,
      name: "John alia",
      age: 25,
      email: "john@example.com",
    },
  ]);

  console.log({ todo });

  // const Todo = () => {
  //   return (
  //     <>
  //       <div className="">Helooo world</div>
  //     </>
  //   );
  // };

  return (
    <>
      {todo.map((item) => {
        return (
          <>
            <li key={item.id}>
              {item.name}, {item.age} {item.email}
            </li>
            <ul>{item.name}</ul>
          </>
        );
      })}

      {/* <div>{button ? <button>Clik Me</button> : "heloo world"}</div>
      {button && "Button Available"}
      <button onClick={() => setButton(!button)}>toggle Me</button> */}
      {/* <Todo /> */}
    </>
  );
};

export default App;
