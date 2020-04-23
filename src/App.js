import React from "react";
import "./styles.css";

import ButtonComponent from "./ButtonComponent/ButtonComponent";
import GitHubCards from "./ClassComponent/";
import StarMatch from "./StarGame/StarGame";

export default function App() {
  return (
    <div className="App">
      <h1>Components Demos:</h1>
      <div style={{ background: "#ddd", padding: "20px" }}>
        <ButtonComponent />
      </div>

      <div style={{ background: "#eee", padding: "20px" }}>
        <GitHubCards title={"GitHub Cards!"} />
      </div>

      <div style={{ background: "#fff", padding: "20px" }}>
        <StarMatch />
      </div>
    </div>
  );
}
