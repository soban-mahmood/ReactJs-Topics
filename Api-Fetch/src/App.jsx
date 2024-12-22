import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data2) => setData(data2));
  });
  console.log(data);

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="" key={item.id}>
            <li>{item.name}</li>
            <li>{item.username}</li>
            <li>{item.email}</li>
          </div>
        );
      })}
    </div>
  );
};

export default App;
