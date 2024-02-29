import React from "react";

function Toolbar() {
  return (
    <div id="Toolbar">
      <button onClick={() => select("Help")} id="Help"></button>

      <button onClick={() => select("Net")} id="Net"></button>

      <button onClick={() => select("Stars")} id="Stars"></button>
    </div>
  );
}

export default Toolbar;
