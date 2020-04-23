import React from "react";

export default function ButtonCounter(props) {
  return (
    <button onClick={() => props.onClickFunction(props.increment)}>
      +{props.increment}
    </button>
  );
}
