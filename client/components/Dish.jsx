import React, { useState, useEffect } from "react";
import dish_background from "../../public/dish_background.jpg";
import debris9 from "../../public/Debris/debris9.png";
import craneflylarvasil from "../../public/Cranefly/craneflylarvasil.png";

const PetriDish = () => {
  const [bugs, setBugs] = useState([]);
  const [debris, setDebris] = useState([]);

  useEffect(() => {
    // Function to generate a random position within the dish
    const getRandomPosition = () => ({
      x: Math.random() * 75,
      y: Math.random() * 75,
    });

    // Function to generate a random rotation for the bugs
    const getRandomRotation = () => Math.random() * 360;

    // Generate random bugs and debris
    const generateRandomItems = (count, type) => {
      const items = [];
      for (let i = 0; i < count; i++) {
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

  const handleBugClick = (bugId) => {
    // Handle bug click
    console.log(`Bug ${bugId} clicked`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${dish_background})`,
        position: "relative",
        height: "75%",
        width: "36%",
        border: "5px solid #ccc",
        boxShadow: "10px 5px 5px black",
        borderRadius: "100%",
        marginLeft: "50px",
      }}
    >
      {debris.map((item) => (
        <img
          key={item.id}
          src={debris9}
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
        <img
          key={bug.id}
          src={craneflylarvasil}
          alt="bug"
          style={{
            width: "30px",
            position: "absolute",
            left: `${bug.position.x}%`,
            top: `${bug.position.y}%`,
            transform: `rotate(${bug.rotation}deg)`,
            cursor: "pointer",
          }}
          onClick={() => handleBugClick(bug.id)}
        />
      ))}
    </div>
  );
};

export default PetriDish;
