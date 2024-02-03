import React from "react";
import { useSelector } from "react-redux";
import "../styles.scss";
import Toolbar from "../components/Toolbar.jsx";
import Lab from "../components/Lab.jsx";

function App() {
  const page = useSelector((state) => state.page.page);
  console.log(page);
  return (
    <div id="AppContainer">
      <h1>WNC Rivers</h1>
      {page === "Net" ? <Lab id={page} /> : null}
      <Toolbar />
    </div>
  );
}

export default App;
