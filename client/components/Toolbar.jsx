import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../src/redux/slices/pageSlice.js";

function Toolbar() {
  const dispatch = useDispatch();
  function select(page) {
    dispatch(setPage(page));
  }
  return (
    <div id="Toolbar">
      <button onClick={() => select("Help")} id="Help"></button>

      <button onClick={() => select("Net")} id="Net"></button>

      <button onClick={() => select("Stars")} id="Stars"></button>
    </div>
  );
}

export default Toolbar;
