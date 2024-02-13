import React from "react";
import { useDrag } from "react-dnd";

const Bug = ({ id, image, position, rotation, onDrag }) => {
  const [, drag] = useDrag({
    type: "bug",
    item: { id, type: "bug" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        // Handle drop if needed
      }
    },
  });

  return (
    <img
      ref={drag}
      src={image}
      alt="bug"
      style={{
        width: "30px",
        position: "absolute",
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${rotation}deg)`,
        cursor: "grab",
      }}
      onClick={() => onDrag(id)}
    />
  );
};

export default Bug;
