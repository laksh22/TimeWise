import React, { useContext } from 'react';
import { View } from 'react-native';

import { GlobalContext } from '../../context/GlobalState';
import Toolbar from './Toolbar';
import styles from '../../styles';
import Task from './Task';

const TasksPage = () => {
  const { tasks } = useContext(GlobalContext);

  return (
    <View style={styles.background}>
      <Toolbar></Toolbar>
      {tasks.map(task => {
        return <Task task={task}></Task>;
      })}
    </View>
  );
};

export default TasksPage;
