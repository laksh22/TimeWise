/*
 * Parent: Tasks Page
 * Code for each individual to-do list element
 */

// Import statements
import React, { useState, useContext } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GlobalContext } from '../../context/GlobalState';
import styles from '../../styles';
import Tag from '../Misc/Tag';
import TaskOverviewModal from '../TaskOverview/TaskOverviewModal';

// Component begins here
const Task = (props) => {
  const { type, id, time, name } = props.task;

  const { changeCurrentTask, completeTask } = useContext(GlobalContext);

  const [visible, toggleVisible] = useState(false);

  // UI of the component
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        changeCurrentTask(id);
        toggleVisible(true);
      }}
    >
      <View style={styles.task}>
        <View style={styles.row}>
          <CheckBox
            uncheckedIcon="circle-o"
            onPress={() => {
              completeTask(id);
            }}
          />
          <View>
            <Text style={styles.mediumText}>{name}</Text>
            <View style={styles.row}>
              <Icon name="clock-o" color="#8BC34A" size={18}></Icon>
              <Text style={(styles.text, { color: '#8BC34A' })}> {time}</Text>
            </View>
          </View>
        </View>
        {type === 'class' ? <Tag type="class"></Tag> : <Tag></Tag>}
        <TaskOverviewModal
          visible={visible}
          closeModal={() => toggleVisible(false)}
        ></TaskOverviewModal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Task;
