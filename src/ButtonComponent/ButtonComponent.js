import React, { useState } from "react";

import ButtonCounter from "./ButtonCounter";
import DisplayButtonValue from "./DisplayButtonValue";

export default function Button(props) {
  const [counter, setCounter] = useState(0);
  const incrementCounter = incrementValue =>
    setCounter(counter + incrementValue);

  return (
    <>
      <ButtonCounter onClickFunction={incrementCounter} increment={1} />
      <ButtonCounter onClickFunction={incrementCounter} increment={5} />
      <DisplayButtonValue message={counter} />
    </>
  );
}
