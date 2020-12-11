import React, {useContext} from "react";
import Car from "./Car";
import AppContext from "./AppContext";

const Cars = (props) => {
  const {cars, incrementPrice, decrementPrice} = useContext(AppContext);
  return (
    <>
    <h4>Cars:</h4>
    {Object.keys(cars).map((carID) => (
      <Car
        key={carID}
        name={cars[carID].name}
        price={cars[carID].price}
        incrementPrice={() => incrementPrice(carID)}
        decrementPrice={() => decrementPrice(carID)}
      />
    ))}
  </>
  );
}

export default Cars;
