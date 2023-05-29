import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return (
    <div
      onMouseOver={props.handleMouseOver}
      onMouseOut={props.handleMouseOut}
      className={classes}
    >
      {props.children}
    </div>
  );
};

export default Card;
