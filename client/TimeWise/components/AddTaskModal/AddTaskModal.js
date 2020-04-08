/*
 * Code for modal which allows user to specify the time and name of a new task and add it
 */

// Import statements
import React, { useState, useContext, useEffect } from 'react';
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
const AddTaskModal = (props) => {
  const { visible, closeModal, day } = props;

  const { user, tasks, addNewTask } = useContext(GlobalContext);

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [time, setTime] = useState('02:00PM');
  const [name, setName] = useState('Task Name');
  const [timeSamples, setTimeSamples] = useState([]);

  var sampleTimes = [
    '07:00AM',
    '08:00AM',
    '09:00AM',
    '10:00AM',
    '11:00AM',
    '12:00PM',
    '01:00PM',
    '02:00PM',
    '03:00PM',
    '04:00PM',
    '05:00PM',
    '06:00PM',
    '07:00PM',
    '08:00PM',
    '09:00PM',
  ];
  const dayTasks = tasks.filter((task) => task.day == day);

  useEffect(() => {
    getTimeSuggestions();
  }, []);

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

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const checkTime = (time) => {
    var i;
    for (i = 0; i < dayTasks.length; i++) {
      if (time == dayTasks[i].time) {
        time = sampleTimes[getRandomInt(14)];
        checkTime(time);
      }
    }
    return time;
  };

  const checkRepeat = (time) => {
    if (timeSamples.length > 0) {
      var i;
      for (i = 0; i < timeSamples.length; i++) {
        if (time == timeSamples[i]) {
          time = sampleTimes[getRandomInt(14)];
          checkRepeat(checkTime(time));
        }
      }
    }
    return time;
  };

  const getTimeSuggestions = () => {
    var i = 0;
    while (i < 5) {
      var sampleTime = checkRepeat(checkTime(sampleTimes[getRandomInt(14)]));
      setTimeSamples([...timeSamples, sampleTime]);
      timeSamples.push(sampleTime);
      i++;
    }
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
            <Text style={styles.boldHeadingText}>Add Task</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                addNewTask({
                  type: 'task',
                  name: name,
                  location: 'Not Specified',
                  day: getNextDayOfTheWeek(day, false),
                  time: time,
                  email: user.email,
                });
                closeModal();
              }}
            >
              <Icon name="paper-plane" color="white" size={25}></Icon>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.row}>
            <View style={styles.taskNameContainer}>
              <TextInput
                placeholder="Task Name"
                style={styles.text}
                onChangeText={onChange}
              />
            </View>

            <View style={styles.timeContainer}>
              <Text style={styles.text}>{time}</Text>
            </View>
          </View>

          <View style={styles.timeRow}>
            <View style={styles.timeButtonColumn}>
              <View style={styles.timeButtonRow}>
                <TouchableOpacity onPress={() => setTime(timeSamples[0])}>
                  <Text style={styles.timeRecommendation}>
                    {timeSamples[0]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTime(timeSamples[1])}>
                  <Text style={styles.timeRecommendation}>
                    {timeSamples[1]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTime(timeSamples[2])}>
                  <Text style={styles.timeRecommendation}>
                    {timeSamples[2]}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.timeButtonRow}>
                <TouchableOpacity onPress={() => setTime(timeSamples[3])}>
                  <Text style={styles.timeRecommendation}>
                    {timeSamples[3]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTime(timeSamples[4])}>
                  <Text style={styles.timeRecommendation}>
                    {timeSamples[4]}
                  </Text>
                </TouchableOpacity>
              </View>
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

export default AddTaskModal;
