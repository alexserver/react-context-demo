import React, {useState} from "react";
import AppContext from "./AppContext";


const AppProvider = (props) => {

  let [cars, setCars] = useState({
    car001: { name: "Honda", price: 100 },
    car002: { name: "BMW", price: 150 },
    car003: { name: "Mercedes", price: 200 },
  });

  const incrementPrice = (selectedID) => {
    // cars[selectedID].price = cars[selectedID].price + 1;
    // console.log('========== cars ', cars);
    setCars(current => {
      console.log('========== cars ', current);
      current[selectedID].price = current[selectedID].price+1;
      return current;
    });
  }

  const decrementPrice = (selectedID) => {
    cars[selectedID].price = cars[selectedID].price - 1;
    console.log('========== cars ', cars);
    setCars(cars);
  };

  let contextProps = {
    cars,
    incrementPrice,
    decrementPrice,
  };

  return (
    <AppContext.Provider value={contextProps}>
      {props.children}
    </AppContext.Provider>
  );

}

export default AppProvider;
