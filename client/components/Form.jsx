import React from "react";
// import info_images from "./filepath"

const Form = (props) => {
  const { id } = props;
  const info = {
    id: "4",
    hints: [
      "Here is a Crayfish Larvae!",
      "It is mildly sensitive to water quality.",
      "The presence of Crayfish Larvae in you river means that the water quality is decent!",
    ],
  }; //db query for id but test data for now
  return (
    <div>
      <div>{id}</div>
      {info.hints.map((hint) => (
        <div>{hint}</div>
      ))}
    </div>
  );
};

export default Form;
