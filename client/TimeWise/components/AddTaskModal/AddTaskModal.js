import React, { useState, useContext, useEffect } from 'react';
import {
  Modal,
  Text,
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

const AddTaskModal = props => {
  const { visible, closeModal, day } = props;

  const { task, tasks, addNewTask } = useContext(GlobalContext);

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [time, setTime] = useState('Time');
  const [name, setName] = useState('Task Name');
  const [timeSamples, setTimeSamples] = useState([]);

  useEffect(() => {
    getTimeSuggestions();
  }, []);

  const onChange = nameValue => setName(nameValue);

  var testTime = '';

  const test = {
    type: 'task',
    name: 'Test',
    location: 'Prime',
    day: 'Wednesday',
    get prop5() {
      return testTime;
    }
  };

  const toggleTimePicker = () => {
    setTimePickerVisibility(!isTimePickerVisible);
  };

  const handleConfirm = dateTime => {
    toggleTimePicker();

    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var ampm = hours > 12 ? 'PM' : 'AM';
    var newTime = setTime(`${hours}:${minutes}${ampm}`);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

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
    '09:00PM'
  ];

  const dayTasks = tasks.filter(task => task.day == day);

  function checkTime(time) {
    var i;
    for (i = 0; i < dayTasks.length; i++) {
      if (time == dayTasks[i].time) {
        time = sampleTimes[getRandomInt(14)];
        checkTime(time);
      }
    }
    return time;
  }

  function checkRepeat(time) {
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
  }

  function getTimeSuggestions() {
    var i = 0;
    while (i < 5) {
      var sampleTime = checkRepeat(checkTime(sampleTimes[getRandomInt(14)]));
      setTimeSamples([...timeSamples, sampleTime]);
      timeSamples.push(sampleTime);
      i++;
    }
  }

  function useTimeSuggestion(givenTime) {
    setTime(givenTime);
  }

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
            <TextInput
              placeholder="Task Name"
              style={styles.text}
              onChangeText={onChange}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>{time}</Text>
          </View>
          <Text style={styles.text}>Suggestions</Text>
          <View style={styles.timeButtonRow}>
            <Button
              title={timeSamples[0]}
              onPress={() => setTime(timeSamples[0])}
            />
            <Button
              title={timeSamples[1]}
              onPress={() => setTime(timeSamples[1])}
            />
            <Button
              title={timeSamples[2]}
              onPress={() => setTime(timeSamples[2])}
            />
          </View>
          <View style={styles.timeButtonRow}>
            <Button
              title={timeSamples[3]}
              onPress={() => setTime(timeSamples[3])}
            />
            <Button
              title={timeSamples[4]}
              onPress={() => setTime(timeSamples[4])}
            />
          </View>
          <View style={styles.buttonRow}>
            <TouchableWithoutFeedback
              onPress={() => {
                toggleTimePicker();
              }}
            >
              <Icon name="hourglass" color="white" size={25}></Icon>
            </TouchableWithoutFeedback>
            <DateTimePicker
              isVisible={isTimePickerVisible}
              mode="time"
              is24Hour={false}
              onConfirm={handleConfirm}
              onCancel={toggleTimePicker}
            />
            <TouchableWithoutFeedback
              onPress={() => {
                test.name = name;
                test.time = time;
                test.day = day;
                addNewTask(test);
                closeModal();
              }}
            >
              <Icon name="paper-plane" color="white" size={25}></Icon>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddTaskModal;
