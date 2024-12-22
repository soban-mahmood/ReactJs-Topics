import React, { useState } from "react";

const App = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setFname(fname);
    setLname(lname);
    console.log(fname,lname)
  };

  return (
    <div>
      <form action="">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          id="fname"
          onChange={(e) => {
            setFname(e.target.value);
          }}
          value={fname}
        />
        <br />
        <br />
        <label htmlFor="lname">last Name</label>
        <input
          type="text"
          placeholder="Enter Your last"
          id="lname"
          onChange={(e) => {
            setLname(e.target.value);
          }}
          value={lname}
        />
        <br />
        <br />
        <input type="submit" onClick={handleChange} />
      </form>
    </div>
  );
};

export default App;
