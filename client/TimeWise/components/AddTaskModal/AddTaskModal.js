import React, { useState, useContext } from 'react';
import {
  Modal,
  Text,
  Picker,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { GlobalContext } from '../../context/GlobalState';
import styles from '../../styles';
import Tag from '../Misc/Tag';

const AddTaskModal = props => {
  const { visible, closeModal } = props;

  const { task, deleteTask } = useContext(GlobalContext);

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [time, setTime] = useState('');

  const toggleTimePicker = () => {
    setTimePickerVisibility(!isTimePickerVisible);
  };

  const handleConfirm = dateTime => {
    toggleTimePicker();

    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var ampm = hours > 12 ? 'PM' : 'AM';

    setTime(`${hours}:${minutes}${ampm}`);
  };

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
          //closeModal();
        }}
      >
        <View style={styles.modal}>
          <View style={styles.buttonRow}>
            <Text style={styles.boldHeadingText}>Add Task</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                closeModal();
              }}
            >
              <Icon name="times" color="white" size={25}></Icon>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.container}>
            <TextInput placeholder="Task Name" style={styles.text} />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}></Text>
          </View>
          <Text>{time}</Text>
          <View>
            <Button title="Select Time" onPress={toggleTimePicker} />
            <DateTimePicker
              isVisible={isTimePickerVisible}
              mode="time"
              is24Hour={false}
              onConfirm={handleConfirm}
              onCancel={toggleTimePicker}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddTaskModal;
