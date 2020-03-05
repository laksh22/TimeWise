import React, { useContext } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GlobalContext } from '../../context/GlobalState';
import styles from '../../styles';
import Tag from '../Misc/Tag';

const TaskOverviewModal = props => {
  const { visible, closeModal } = props;

  const { task, deleteTask } = useContext(GlobalContext);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      visible={visible}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        activeOpacity={0}
        onPressOut={() => {
          closeModal();
        }}
      >
        <View style={styles.modal}>
          <View style={styles.buttonRow}>
            <TouchableWithoutFeedback
              onPress={() => alert('TODO: Direct to Edit Link')}
            >
              <Icon name="pencil" color="white" size={25}></Icon>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => deleteTask(task.name)}>
              <Icon name="trash" color="white" size={25}></Icon>
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.boldHeadingText}>{task.name}</Text>
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
      </TouchableOpacity>
    </Modal>
  );
};

export default TaskOverviewModal;
