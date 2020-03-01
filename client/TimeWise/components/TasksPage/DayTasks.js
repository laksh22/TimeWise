import React, { useContext } from 'react';
import { View } from 'react-native';

import { GlobalContext } from '../../context/GlobalState';
import styles from '../../styles';
import DayHeading from './DayHeading';
import Task from './Task';

const DayTasks = props => {
  const { tasks } = useContext(GlobalContext);

  const { day, date } = props;

  const dayTasks = tasks.filter(task => task.day == day);

  return (
    <View>
      <DayHeading day={day} date={date} key={date}></DayHeading>
      {dayTasks.map(task => {
        return <Task task={task} key={task.name}></Task>;
      })}
    </View>
  );
};

export default DayTasks;
