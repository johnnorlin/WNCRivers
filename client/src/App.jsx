import React from "react";
import "../styles.scss";
import Toolbar from "../components/Toolbar.jsx";
import Lab from "../components/Lab.jsx";

function App() {
  return (
    <div id="AppContainer">
      <h1>WNC Rivers</h1>
      <Lab />
      <Toolbar />
    </div>
  );
}

export default App;
