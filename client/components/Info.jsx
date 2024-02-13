import React from "react";
import { useDrop } from "react-dnd";

const Info = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "bug",
    drop: (item) => addBugToInfo(item.id),
  });

  return (
    <div
      id="info"
      ref={drop}
      style={{
        border: "1px solid #ccc",
        backgroundColor: isOver ? "#f0f0f0" : "transparent",
      }}
    ></div>
  );
};

export default Info;
