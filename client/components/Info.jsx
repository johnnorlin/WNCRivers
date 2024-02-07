import React from "react";

function Info(props) {
  const { id } = props;
  return (
    <div className="Info" id={id}>
      {id}
    </div>
  );
}

export default Info;
