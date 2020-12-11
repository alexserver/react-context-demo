import React from "react";

const Car = (props) => (
  <>
    <p>Name: {props.name}</p>
    <p>Price: ${props.price}</p>
    <button onClick={props.incrementPrice}>&uarr;</button>
    <button onClick={props.decrementPrice}>&darr;</button>
  </>
);

export default Car;
