import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  tasks: {},
  task: {
    type: 'class',
    location: 'LT4',
    day: 'Tuesday',
    time: '2:30PM'
  }
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
