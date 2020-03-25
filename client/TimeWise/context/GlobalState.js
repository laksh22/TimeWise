import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial task list
const tasks = [
  {
    type: 'class',
    name: 'CZ3002 LEC',
    location: 'TCT-LT',
    day: 'Tuesday',
    time: '3:30PM'
  },
  {
    type: 'class',
    name: 'CZ3002 TUT',
    location: 'TR+16',
    day: 'Tuesday',
    time: '9:30AM'
  },
  {
    type: 'class',
    name: 'CZ3002 LAB',
    location: 'SWLAB3',
    day: 'Thursday',
    time: '8:30AM'
  },
  {
    type: 'class',
    name: 'CE3001 LEC',
    location: 'LT2A',
    day: 'Friday',
    time: '2:30PM'
  },
  {
    type: 'class',
    name: 'CE3001 TUT',
    location: 'TR+17',
    day: 'Monday',
    time: '10:30AM'
  },
  {
    type: 'class',
    name: 'CE3001 LAB',
    location: 'HWLAB3',
    day: 'Friday',
    time: '12:30PM'
  }
];

// Initial state
const initialState = {
  tasks: [
    {
      type: 'class',
      name: 'CZ3002 LEC',
      location: 'TCT-LT',
      day: 'Tuesday',
      time: '3:30PM'
    },
    {
      type: 'class',
      name: 'CZ3002 TUT',
      location: 'TR+16',
      day: 'Tuesday',
      time: '9:30AM'
    },
    {
      type: 'class',
      name: 'CZ3002 LAB',
      location: 'SWLAB3',
      day: 'Thursday',
      time: '8:30AM'
    },
    {
      type: 'class',
      name: 'CE3001 LEC',
      location: 'LT2A',
      day: 'Friday',
      time: '2:30PM'
    },
    {
      type: 'class',
      name: 'CE3001 TUT',
      location: 'TR+17',
      day: 'Monday',
      time: '10:30AM'
    },
    {
      type: 'class',
      name: 'CE3001 LAB',
      location: 'HWLAB3',
      day: 'Friday',
      time: '12:30PM'
    }
  ],
  task: {}
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const convertTimeFormat = dateTime => {
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var ampm = hours > 12 ? 'PM' : 'AM';
    return `${hours}:${minutes}${ampm}`;
  };

  // Actions
  const getTasks = async () => {
    dispatch({
      type: 'GET_TASKS',
      payload: tasks
    });
    // try {
    //   const res = await axios.post('http://10.0.2.2:27017/', {
    //     username: email,
    //     password: password
    //   });

    //   let classArr = [];
    //   for (const task of res.data.data) {
    //     var newTask = {
    //       type: 'class',
    //       name: task.courseCode,
    //       location: task.location,
    //       day: task.date.getDay(),
    //       time: convertTimeFormat(task.date.getTime())
    //     };
    //     classArr.push(newTask);
    //   }
    //   dispatch({
    //     type: 'GET_TASKS',
    //     payload: res.data.data
    //   });
    // } catch (err) {
    //   console.log(error);
    // }
  };

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

  const addNewTask = task => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: task
    });
  };

  const editTask = task => {
    dispatch({
      type: 'EDIT_TASK',
      payload: task
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        changeCurrentTask: changeCurrentTask,
        deleteTask: deleteTask,
        completeTask: completeTask,
        addNewTask: addNewTask,
        editTask: editTask,
        getTasks: getTasks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
