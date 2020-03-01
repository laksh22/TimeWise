import React from 'react';
import { View, FlatList } from 'react-native';

import Toolbar from './Toolbar';
import styles from '../../styles';
import DayTasks from './DayTasks';

const TasksPage = () => {
  const days = [
    { day: 'Monday', date: '11 Feb' },
    { day: 'Tuesday', date: '12 Feb' },
    { day: 'Wednesday', date: '13 Feb' },
    { day: 'Thursday', date: '14 Feb' },
    { day: 'Friday', date: '15 Feb' },
    { day: 'Saturday', date: '16 Feb' },
    { day: 'Sunday', date: '17 Feb' }
  ];

  return (
    <View style={styles.background}>
      <Toolbar></Toolbar>
      <FlatList
        style={styles.tasksList}
        data={days}
        renderItem={({ item }) => (
          <DayTasks day={item.day} date={item.date}></DayTasks>
        )}
        keyExtractor={item => item.date}
      />
    </View>
  );
};

export default TasksPage;
