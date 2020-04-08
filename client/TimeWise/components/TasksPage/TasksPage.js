/*
 * Code for the page containing tasks sorted by day
 */

// Import statements
import React from 'react';
import { View, FlatList } from 'react-native';

import styles from '../../styles';
import Toolbar from './Toolbar';
import DayTasks from './DayTasks';

// Component begins here
const TasksPage = ({ navigation }) => {
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

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day1 = new Date();
  const day2 = new Date();
  day2.setDate(day1.getDate() + 1);
  const day3 = new Date(day2);
  day3.setDate(day2.getDate() + 1);
  const day4 = new Date(day3);
  day4.setDate(day3.getDate() + 1);
  const day5 = new Date(day4);
  day5.setDate(day4.getDate() + 1);
  const day6 = new Date(day5);
  day6.setDate(day5.getDate() + 1);
  const day7 = new Date(day6);
  day7.setDate(day6.getDate() + 1);

  const days = [
    {
      day: dayNames[day1.getDay()],
      date: `${day1.getDate()} ${monthNames[day1.getMonth()].substring(0, 3)}`,
    },
    {
      day: dayNames[day2.getDay()],
      date: `${day2.getDate()} ${monthNames[day2.getMonth()].substring(0, 3)}`,
    },
    {
      day: dayNames[day3.getDay()],
      date: `${day3.getDate()} ${monthNames[day3.getMonth()].substring(0, 3)}`,
    },
    {
      day: dayNames[day4.getDay()],
      date: `${day4.getDate()} ${monthNames[day4.getMonth()].substring(0, 3)}`,
    },
    {
      day: dayNames[day5.getDay()],
      date: `${day5.getDate()} ${monthNames[day5.getMonth()].substring(0, 3)}`,
    },
    {
      day: dayNames[day6.getDay()],
      date: `${day6.getDate()} ${monthNames[day6.getMonth()].substring(0, 3)}`,
    },
    {
      day: dayNames[day7.getDay()],
      date: `${day7.getDate()} ${monthNames[day7.getMonth()].substring(0, 3)}`,
    },
  ];

  // UI of the component
  return (
    <View style={styles.background}>
      <Toolbar navigation={navigation}></Toolbar>
      <FlatList
        style={styles.tasksList}
        data={days}
        renderItem={({ item }) => (
          <DayTasks day={item.day} date={item.date}></DayTasks>
        )}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
};

export default TasksPage;
