import React from "react";
import Dish from "./Dish.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Lab() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="Lab">
        <Dish />
      </div>
    </DndProvider>
  );
}

export default Lab;
