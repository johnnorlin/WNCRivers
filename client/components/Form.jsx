import React from "react";
// import info_images from "./filepath"

const Form = (props) => {
  const { id } = props;
  console.log(id);

  const handleSelect = (e) => {
    if (e.target.value == id) {
      console.log("match!");
    } else console.log("try again...");
  };
  return (
    <div>
      <div>
        <label htmlFor="bugs">
          {id ? "Can you identify this bug? " : "Drag a bug over!"}
        </label>
        <select id="bugs" name="bugs" onChange={(e) => handleSelect(e)}>
          <option value="">Select a bug</option>
          <option value="2">Cranefly</option>
          <option value="1">Blackfly</option>
          <option value="3">Dobsonfly</option>
          <option value="5">Water Penny</option>
          <option value="4">Dragonfly</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
