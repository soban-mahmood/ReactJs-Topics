import React, { useContext } from "react";
import counter from "../context/Context";
import Appbar from "./Appbar";

const Navbar = () => {
  const value = useContext(counter);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        Navbar : {value.count}
      </button>
      <Appbar/>
    </div>
  );
};

export default Navbar;
