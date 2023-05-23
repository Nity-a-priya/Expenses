// In web development, card generally means the container with rounded corners, drop shadows etc..
import React from "react";

import "./Card.css";

//function Card(props) {
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
