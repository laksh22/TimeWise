import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles';

const DayHeading = props => {
  const { day, date } = props;

  return (
    <View style={styles.dayHeading}>
      <View style={styles.dayHeadingDetails}>
        <Text style={styles.mediumText}> {day} </Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      <Icon
        name="plus-circle"
        color="white"
        size={18}
        style={{ marginRight: 20 }}
      ></Icon>
    </View>
  );
};

export default DayHeading;
