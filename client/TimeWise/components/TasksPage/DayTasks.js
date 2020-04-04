/*
 * Parent: Tasks Page
 * Code for collection of day heading + tasks for that day
 */

// Import statements
import React, { useContext } from 'react';
import { View } from 'react-native';

import { GlobalContext } from '../../context/GlobalState';
import DayHeading from './DayHeading';
import Task from './Task';

// Component begins here
const DayTasks = (props) => {
  const { day, date } = props;

  const { tasks } = useContext(GlobalContext);

  const dayTasks = tasks.filter((task) => task.day == day);

  // UI of the component
  return (
    <View>
      <DayHeading day={day} date={date} key={date}></DayHeading>
      {dayTasks.map((task) => {
        return <Task task={task} key={task.id}></Task>;
      })}
    </View>
  );
};

export default DayTasks;
