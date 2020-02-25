import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  tasks: {},
  task: {}
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
