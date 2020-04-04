/*
 * This is the code for the Redux Store as well as the Actions
 */

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import axios from 'axios'; // For making calls to the backend

// The Store is initially empty since the Store is populated with data upon login after an API call
const initialState = {
  tasks: [],
  task: {},
  user: {},
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
    'Sunday',
  ];

  // Different actions which are called by the View. Each Action is Dispatched to the Reducer which changes the Store
  const getTasks = async (email, password) => {
    await dispatch({
      type: 'CHANGE_USER',
      payload: { email, password },
    });

    try {
      const res = await axios.get(
        `https://nodebe.herokuapp.com/api/taskquery/?email=${email}`
      );

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
            time: `${task.time.substring(0, 2)}:${task.time.substring(2, 4)}`,
          };
        } else {
          var newTask = {
            id: task._id,
            type: task.type,
            name: task.name,
            location: task.location,
            day: task.day,
            time: `${task.time.substring(0, 2)}:${task.time.substring(2, 4)}`,
          };
        }

        classArr.push(newTask);
      }

      dispatch({
        type: 'GET_TASKS',
        payload: {
          tasks: classArr,
          user: { email, password },
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const changeCurrentTask = (id) => {
    dispatch({
      type: 'CHANGE_CURRENT_TASK',
      payload: id,
    });
  };

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(
        `https://nodebe.herokuapp.com/api/task/${id}`,
        {
          email: state.user.email,
        }
      );

      dispatch({
        type: 'DELETE_TASK',
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const completeTask = async (id) => {
    try {
      const res = await axios.delete(
        `https://nodebe.herokuapp.com/api/task/${id}`,
        {
          email: state.user.email,
        }
      );

      dispatch({
        type: 'COMPLETE_TASK',
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addNewTask = async (userTask) => {
    try {
      const res = await axios.post('https://nodebe.herokuapp.com/api/task/', {
        type: userTask.type,
        name: userTask.name,
        day: userTask.day,
        time: userTask.time
          .replace(':', '')
          .replace('AM', '')
          .replace('PM', ''),
        location: userTask.location,
        email: state.user.email,
      });

      const { task } = res.data;

      const newTask = {
        id: task._id,
        type: task.type,
        name: task.name,
        location: task.location,
        day: task.day,
        time: `${task.time.substring(0, 2)}:${task.time.substring(2, 4)}`,
      };

      dispatch({
        type: 'ADD_NEW_TASK',
        payload: newTask,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = async (userTask) => {
    try {
      const res = await axios.patch(
        `https://nodebe.herokuapp.com/api/task/${userTask.id}`,
        {
          type: userTask.type,
          name: userTask.name,
          day: userTask.day,
          time: userTask.time.replace(':', ''),
          location: userTask.location,
          email: state.user.email,
        }
      );

      const task = res.data.updatePost;

      const newTask = {
        id: userTask.id,
        type: task.type,
        name: task.name,
        location: task.location,
        day: task.day,
        time: `${task.time.substring(0, 2)}:${task.time.substring(2, 4)}`,
      };

      dispatch({
        type: 'EDIT_TASK',
        payload: newTask,
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
        user: state.user,
        changeCurrentTask,
        deleteTask,
        completeTask,
        addNewTask,
        editTask,
        getTasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
