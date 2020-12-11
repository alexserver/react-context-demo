import React from "react";
import ProductList from "./ProductList";
import AppContainer from "./AppContainer";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to my web store</h1>
          </header>
          <ProductList />
        </div>
      </AppContainer>
    );
  }
}

export default App;
