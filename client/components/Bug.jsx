import React from "react";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { setBug } from "../src/redux/slices/pageSlice";

const Bug = ({ id, image, position, rotation }) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "bug",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={image}
      id={id}
      alt="bug"
      style={{
        width: "30px",
        position: "absolute",
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${rotation}deg)`,
        cursor: "grab",
      }}
    />
  );
};

export default Bug;
