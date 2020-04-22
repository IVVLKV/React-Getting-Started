import React, { useState } from "react";
import "./styles.css";

import ButtonCounter from "./ButtonCounter";

export default function App() {
  //Button
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div className="App">
      <h1>Components Demos:</h1>
      <ButtonCounter onClickFunction={incrementCounter} increment={1} />
      <ButtonCounter onClickFunction={incrementCounter} increment={5} />
    </div>
  );
}
