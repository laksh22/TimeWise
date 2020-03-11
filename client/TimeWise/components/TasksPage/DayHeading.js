import React, { useState, useContext } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles';
import { GlobalContext } from '../../context/GlobalState';
import AddTaskModal from '../AddTaskModal/AddTaskModal';


const DayHeading = props => {
  const { day, date } = props;
  const [visible, toggleVisible] = useState(false);


  return (
    <View style={styles.dayHeading}>
      <View style={styles.dayHeadingDetails}>
        <Text style={styles.mediumText}> {day} </Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          toggleVisible(true);
        }}
      >
        <View>
          <Icon
            name="plus-circle"
            color="white"
            size={18}
            style={{ marginRight: 20 }}
          ></Icon>
          <AddTaskModal
            visible={visible}
            day={day}
            closeModal={() => toggleVisible(false)}
          ></AddTaskModal>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DayHeading;
