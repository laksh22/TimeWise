import React, { useContext } from 'react';
import { Modal, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GlobalContext } from '../../context/GlobalState';
import styles from '../../styles';
import Tag from './Tag';

const TaskOverviewModal = () => {
  const { task } = useContext(GlobalContext);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.modal}>
          <View style={styles.buttonRow}>
            <Icon name="pencil" color="white" size={25}></Icon>
            <Icon name="trash" color="white" size={25}></Icon>
          </View>
          <Text style={styles.boldHeadingText}>CZ3002 Lecture</Text>
          <View style={styles.container}>
            <Text style={styles.text}>Type:</Text>
            <Tag type={task.type}></Tag>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Location:</Text>
            <Text style={styles.text}>{task.location}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Day:</Text>
            <Text style={styles.text}>{task.day}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Time:</Text>
            <Text style={styles.text}>{task.time}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TaskOverviewModal;
