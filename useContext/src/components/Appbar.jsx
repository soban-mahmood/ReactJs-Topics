import React, { useContext } from "react";
import counter from "../context/Context";

const Appbar = () => {
  const value = useContext(counter);
  return <div>Appbar : {value.count}</div>;
};

export default Appbar;
