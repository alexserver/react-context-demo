import React from "react";
import Car from "./Car";
import AppContext from "./AppContext";

const Cars = (props) => (
  <AppContext.Consumer>
    {(context) => {
      return (
        <>
          <h4>Cars:</h4>
          {Object.keys(context.cars).map((carID) => (
            <Car
              key={carID}
              name={context.cars[carID].name}
              price={context.cars[carID].price}
              incrementPrice={() => context.incrementPrice(carID)}
              decrementPrice={() => context.decrementPrice(carID)}
            />
          ))}
        </>
      );
    }}
  </AppContext.Consumer>
);

export default Cars;
