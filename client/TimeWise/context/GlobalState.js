import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import axios from 'axios';

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
  tasks: [],
  task: {},
  email: ''
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  // Actions
  const changeUser = async email => {
    dispatch({
      type: 'CHANGE_USER',
      payload: email
    });
  };

  const getTasks = async (email, password) => {
    try {
      const res = await axios.get('https://nodebe.herokuapp.com/api/task/', {
        username: email,
        password: password
      });

      let classArr = [];

      var hasNumber = /\d/;
      for (const task of res.data.allTasks) {
        if (hasNumber.test(task.day)) {
          var taskDay = new Date(task.day);
          var newTask = {
            id: task._id,
            type: task.type,
            name: task.name,
            location: task.location,
            day: dayNames[taskDay.getDay()],
            time: `${task.time.substring(0, 2)}:${task.time.substring(2, 4)}`
          };
        } else {
          var newTask = {
            id: task._id,
            type: task.type,
            name: task.name,
            location: task.location,
            day: task.day,
            time: `${task.time.substring(0, 2)}:${task.time.substring(2, 4)}`
          };
        }

        classArr.push(newTask);
      }

      dispatch({
        type: 'GET_TASKS',
        payload: classArr.slice(1, 20)
      });
    } catch (err) {
      console.log(err);
    }
  };

  const changeCurrentTask = id => {
    dispatch({
      type: 'CHANGE_CURRENT_TASK',
      payload: id
    });
  };

  const deleteTask = id => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    });
  };

  const completeTask = id => {
    dispatch({
      type: 'COMPLETE_TASK',
      payload: id
    });
  };

  const addNewTask = async userTask => {
    try {
      const res = await axios.post('https://nodebe.herokuapp.com/api/task/', {
        type: userTask.type,
        name: userTask.name,
        day: userTask.day,
        time: userTask.time.replace(':', ''),
        location: userTask.location,
        email: state.email
      });

      const { task } = res.data;

      const newTask = {
        id: task._id,
        type: task.type,
        name: task.name,
        location: task.location,
        day: task.day,
        time: `${task.time.substring(0, 2)}:${task.time.substring(2, 4)}`
      };

      dispatch({
        type: 'ADD_NEW_TASK',
        payload: newTask
      });
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = async userTask => {
    try {
      const res = await axios.patch(
        `https://nodebe.herokuapp.com/api/task/${userTask.id}`,
        {
          type: userTask.type,
          name: userTask.name,
          day: userTask.day,
          time: userTask.time.replace(':', ''),
          location: userTask.location,
          email: state.email
        }
      );

      const task = res.data.updatePost;

      const newTask = {
        id: userTask.id,
        type: task.type,
        name: task.name,
        location: task.location,
        day: task.day,
        time: `${task.time.substring(0, 2)}:${task.time.substring(2, 4)}`
      };

      dispatch({
        type: 'EDIT_TASK',
        payload: newTask
      });
    } catch (err) {
      console.log(err);
    }
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
