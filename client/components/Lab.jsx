import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dish from "./Dish.jsx";

function Lab(props) {
  const bug = useSelector((state) => state.page.bug);
  const { id } = props;
  return (
    <div className="Lab" id={id}>
      <Dish />
    </div>
  );
}

export default Lab;
