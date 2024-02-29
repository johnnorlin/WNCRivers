import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBug, setBugs, setDebris } from "../src/redux/slices/pageSlice.js";
import dish_background from "../../public/dish_background.jpg";
import dish_ripples from "../../public/dish_ripples.gif";
import DebrisImgs from "../../public/Debris/Debris.js";
import BugImgs from "../../public/Bugs/Bugs.js";
import Bug from "./Bug.jsx";
import Form from "./Form.jsx";
import { useDrop } from "react-dnd";

const Dish = () => {
  const bugs = useSelector((state) => state.page.bugs);
  const debris = useSelector((state) => state.page.debris);
  const info = useSelector((state) => state.page.bug);
  const dispatch = useDispatch();

  const getRandomPosition = () => ({
    x: Math.random() * (83 - 18) + 18,
    y: Math.random() * (83 - 18) + 18,
  });
  const getRandomRotation = () => Math.random() * 360;

  const generateRandomItems = (count, type) => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      items.push({
        id: i,
        image: type + i,
        type,
        position: getRandomPosition(),
        rotation: getRandomRotation(),
      });
    }
    console.log(items);
    return items;
  };

  if (bugs.length === 0) {
    dispatch(setBugs(generateRandomItems(5, "bug")));
  }
  if (debris.length === 0) {
    dispatch(setDebris(generateRandomItems(10, "debris")));
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "bug",
    drop: (item) => displayBug(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const displayBug = (item) => {
    console.log("selected bug", item);
    dispatch(setBug(item));
  };

  const clearBug = () => {
    dispatch(setBug(null));
  };

  return (
    <div id="dish">
      <div
        id="petri"
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
            src={DebrisImgs[item.image]}
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
        {bugs
          .filter((bug) => (info ? bug.id !== info.id : true))
          .map((bug) => (
            <Bug
              id={bug.id}
              image={BugImgs[bug.image]}
              position={bug.position}
              rotation={bug.rotation}
            />
          ))}
      </div>
      <div ref={drop} id="info">
        {bugs
          .filter((bug) => (info ? bug.id === info.id : false))
          .map((bug) => (
            <img src={BugImgs[bug.image]} />
          ))}
        <div id="content">
          {/*pass in selected bug to form*/}
          <Form />
          <button onClick={() => clearBug()}>Release Bug</button>
        </div>
      </div>
    </div>
  );
};

export default Dish;
