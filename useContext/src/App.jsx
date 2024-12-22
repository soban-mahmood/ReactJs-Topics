import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import counter from "./context/Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <counter.Provider value={{count,setCount}}>
      <Navbar />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </counter.Provider>
  );
}

export default App;
