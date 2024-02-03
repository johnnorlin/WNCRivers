import React from "react";
import Dish from "./Dish.jsx";

function Lab(props) {
  const { id } = props;
  return (
    <div className="Lab" id={id}>
      <Dish />
    </div>
  );
}

export default Lab;
