import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  tasks: [
    {
      type: 'class',
      name: 'CZ3002 Lecture',
      location: 'LT4',
      day: 'Tuesday',
      time: '2:30PM'
    },
    {
      type: 'class',
      name: 'CZ3004 Lab',
      location: 'HWLAB3',
      day: 'Friday',
      time: '11:30PM'
    },
    {
      type: 'class',
      name: 'HE9091 Tutorial',
      location: 'TR+26',
      day: 'Monday',
      time: '4:30PM'
    },
    {
      type: 'task',
      name: 'Buy groceries',
      location: 'Prime',
      day: 'Wednesday',
      time: '10:30AM'
    }
  ],
  task: {
    type: 'class',
    name: 'CZ3002 Lecture',
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

  // Actions
  const changeCurrentTask = name => {
    dispatch({
      type: 'CHANGE_CURRENT_TASK',
      payload: name
    });
  };

  const deleteTask = name => {
    dispatch({
      type: 'DELETE_TASK',
      payload: name
    });
  };

  const completeTask = name => {
    dispatch({
      type: 'COMPLETE_TASK',
      payload: name
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        changeCurrentTask: changeCurrentTask,
        deleteTask: deleteTask,
        completeTask: completeTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
