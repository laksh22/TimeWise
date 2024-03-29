/*
 * Code for modal which allows user to edit the time and name of an existing task
 */

// Import statements
import React, { useState, useContext } from 'react';
import {
  Modal,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { GlobalContext } from '../../context/GlobalState';
import styles from '../../styles';

// Component begins here
const EditTaskModal = (props) => {
  const { visible, closeModal } = props;

  const { task, editTask } = useContext(GlobalContext);

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [time, setTime] = useState(task.time);
  const [name, setName] = useState(task.name);

  const onChange = (nameValue) => setName(nameValue);

  const toggleTimePicker = () => {
    setTimePickerVisibility(!isTimePickerVisible);
  };

  const handleConfirm = (dateTime) => {
    toggleTimePicker();

    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    setTime(`${hours}:${minutes} `);
  };

  const getNextDayOfTheWeek = (
    dayName,
    excludeToday = true,
    refDate = new Date()
  ) => {
    const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(
      dayName.slice(0, 3).toLowerCase()
    );

    if (dayOfWeek < 0) return;
    refDate.setDate(
      refDate.getDate() +
        !!excludeToday +
        ((dayOfWeek + 7 - refDate.getDay() - !!excludeToday) % 7)
    );

    return refDate;
  };

  // UI of the component
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
            <Text style={styles.boldHeadingText}>Edit Task</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                const editedTask = {
                  name: name,
                  time: time,
                  id: task.id,
                  location: task.location,
                  day: getNextDayOfTheWeek(task.day, false),
                  type: task.type,
                };
                editTask(editedTask);
                closeModal();
              }}
            >
              <Icon name="paper-plane" color="white" size={25}></Icon>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.container}>
            <TextInput
              defaultValue={task.name}
              placeholder={task.name}
              style={styles.text}
              onChangeText={onChange}
            />
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.taskNameContainer}>
              <Text style={styles.text}>{time}</Text>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={() => {
                  toggleTimePicker();
                }}
              >
                <Text style={styles.chooseTimeButton}>CHOOSE{'\n'}TIME</Text>
              </TouchableOpacity>
              <DateTimePicker
                isVisible={isTimePickerVisible}
                mode="time"
                is24Hour={false}
                onConfirm={handleConfirm}
                onCancel={toggleTimePicker}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default EditTaskModal;
