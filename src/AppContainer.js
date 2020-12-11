import React, {useState} from "react";
import {AppProvider} from "./AppContext";


const AppContainer = (props) => {

  const [cars, setCars] = useState({
    car001: { name: "Honda", price: 100 },
    car002: { name: "BMW", price: 150 },
    car003: { name: "Mercedes", price: 200 },
  });

  const incrementPrice = (carID) => {
    setCars(current => {
      const result = {
        ...current,
        [carID]: { name: current[carID].name, price: current[carID].price + 1 },
      };
      console.log('========== cars ', result);
      return result;
    });
  }

  const decrementPrice = (carID) => {
    // cars[carID].price = cars[carID].price - 1;
    // console.log('========== cars ', cars);
    // setCars(cars);
    setCars(current => {
      const result = {
        ...current,
        [carID]: { name: current[carID].name, price: current[carID].price - 1 },
      };
      console.log('========== cars ', result);
      return result;
    });
  };

  let contextValue = {
    cars,
    incrementPrice,
    decrementPrice,
  };

  return (
    <AppProvider value={contextValue}>
      {props.children}
    </AppProvider>
  );

}

export default AppContainer;
