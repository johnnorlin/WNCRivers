import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBug } from "../src/redux/slices/pageSlice.js";
import dish_background from "../../public/dish_background.jpg";
import dish_ripples from "../../public/dish_ripples.gif";
import DebrisImgs from "../../public/Debris/Debris.js";
import BugImgs from "../../public/Bugs/Bugs.js";
import Bug from "./Bug.jsx"; // Import the Bug component
import { useDrop } from "react-dnd";

const Dish = () => {
  const [bugs, setBugs] = useState([]);
  const [debris, setDebris] = useState([]);

  useEffect(() => {
    // Function to generate a random position within the dish
    const getRandomPosition = () => ({
      x: Math.random() * (83 - 18) + 18,
      y: Math.random() * (83 - 18) + 18,
    });

    // Function to generate a random rotation for the bugs
    const getRandomRotation = () => Math.random() * 360;

    // Generate random bugs and debris
    const generateRandomItems = (count, type) => {
      const items = [];
      for (let i = 1; i <= count; i++) {
        items.push({
          id: i,
          type,
          position: getRandomPosition(),
          rotation: getRandomRotation(),
        });
      }
      return items;
    };

    // Set bugs and debris in state
    setBugs(generateRandomItems(5, "bug"));
    setDebris(generateRandomItems(10, "debris"));
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "bug",
    drop: (item) => displayBug(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${dish_ripples}), url(${dish_background})`,
          width: "300px",
          height: "300px",
          position: "relative",
          border: "5px solid #ccc",
          boxShadow: "10px 5px 5px black",
          borderRadius: "100%",
          boxSizing: "border-box",
        }}
      >
        {debris.map((item) => (
          <img
            key={item.id}
            src={DebrisImgs[`debris${item.id}`]}
            alt="debris"
            style={{
              width: "30px",
              position: "absolute",
              transform: `rotate(${item.rotation}deg)`,
              left: `${item.position.x}%`,
              top: `${item.position.y}%`,
            }}
          />
        ))}
        {bugs.map((bug) => (
          <Bug
            key={bug.id}
            id={bug.id}
            image={BugImgs[`bug${bug.id}`]}
            position={bug.position}
            rotation={bug.rotation}
          />
        ))}
      </div>
      <div ref={drop} id="board"></div>
    </div>
  );
};

export default Dish;
