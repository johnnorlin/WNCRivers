import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dish from "./Dish.jsx";
import Info from "./Info.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Lab(props) {
  const bug = useSelector((state) => state.page.bug);
  const { id } = props;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="Lab" id={id}>
        <Dish />
        {/* <Info id={info} /> */}
      </div>
    </DndProvider>
  );
}

export default Lab;
