import React from 'react';

const AppContext = React.createContext({
  cars: {},
  incrementPrice: () => {},
  decrementPrice: () => {}
});

export const AppProvider = AppContext.Provider;

export default AppContext