import React from "react";
import ProductList from "./ProductList";
import AppProvider from "./AppProvider";

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to my web store</h1>
          </header>
          <ProductList />
        </div>
      </AppProvider>
    );
  }
}

export default App;
