import React, { useState } from "react";

function Form() {
  const [random, setRandom] = useState(0); // correct state

  const change = () => {
    setRandom(Math.floor(Math.random() * 100)); // random number 0-99
  };

  return (
    <div>
      <h1>Random Number</h1>
      <h2>{random}</h2>
      <button onClick={change}>Generate Random Number</button>
    </div>
  );
}

export default Form;
