import React from "react";
import "./styles.css";

import Button from "./Button/Button";
import GitHubCards from "./ClassComponent/";

export default function App() {
  return (
    <div className="App">
      <h1>Components Demos:</h1>
      <div style={{ background: "#ddd", padding: "20px" }}>
        <Button />
      </div>

      <div style={{ background: "#fff", padding: "20px" }}>
        <GitHubCards title={"GitHub Cards!"} />
      </div>
    </div>
  );
}
