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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [time, setTime] = useState("Time");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn("A date has been picked: ", date);
    setTime(date);
    hideDatePicker();
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
            <TouchableWithoutFeedback onPress={() => {
              closeModal();
            }}>
              <Icon name="times" color="white" size={25}></Icon>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.container}>
            <TextInput
              placeholder="Task Name"
              style={styles.text}
            />
          </View>
          <View style={styles.container}>
          <Text style={styles.text}></Text>
          </View>
          <View>
            <Button title="Select Time" onPress={showDatePicker} />
            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="time"
              is24Hour={false}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddTaskModal;
