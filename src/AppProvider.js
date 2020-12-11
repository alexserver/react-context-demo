import React, {useState} from "react";
import AppContext from "./AppContext";

class AppProvider extends React.Component {
  state = {
    cars: {
      car001: { name: "Honda", price: 100 },
      car002: { name: "BMW", price: 150 },
      car003: { name: "Mercedes", price: 200 },
    },
  };
  incrementPrice = this.incrementPrice.bind(this);
  decrementPrice = this.decrementPrice.bind(this);

  incrementPrice(selectedID) {
    const cars = Object.assign({}, this.state.cars);
    cars[selectedID].price = cars[selectedID].price + 1;
    this.setState({
      cars,
    });
  }

  decrementPrice(selectedID) {
    const cars = Object.assign({}, this.state.cars);
    cars[selectedID].price = cars[selectedID].price - 1;
    this.setState({
      cars,
    });
  }

  render() {
    const contextProps = {
      cars: this.state.cars,
      incrementPrice: this.incrementPrice,
      decrementPrice: this.decrementPrice,
    };
    return (
      <AppContext.Provider value={contextProps}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

// const AppProvider = (props) => {

//   let [cars, setCars] = useState({
//     car001: { name: "Honda", price: 100 },
//     car002: { name: "BMW", price: 150 },
//     car003: { name: "Mercedes", price: 200 },
//   });

//   const incrementPrice = (selectedID) => {
//     // cars[selectedID].price = cars[selectedID].price + 1;
//     // console.log('========== cars ', cars);
//     setCars(current => {
//       console.log('========== cars ', current);
//       current[selectedID].price = current[selectedID].price+1;
//       return current;
//     });
//   }

//   const decrementPrice = (selectedID) => {
//     cars[selectedID].price = cars[selectedID].price - 1;
//     console.log('========== cars ', cars);
//     setCars(cars);
//   };

//   let contextProps = {
//     cars,
//     incrementPrice,
//     decrementPrice,
//   };

//   return (
//     <AppContext.Provider value={contextProps}>
//       {props.children}
//     </AppContext.Provider>
//   );

// }

export default AppProvider;
