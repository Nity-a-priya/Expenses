// In web development, card generally means the container with rounded corners, drop shadows etc..
import React from 'react';

import './Card.css';

//function Card(props) {
    const Card = (props) => {
    const classes = 'card ' + props.className; 
    return <div className={classes}>{props.children}</div>;
}

export default Card;
