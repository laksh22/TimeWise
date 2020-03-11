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

const EditTaskModal = props => {
  const { visible, closeModal} = props;

  const { task, editTask } = useContext(GlobalContext);

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [time, setTime] = useState(task.time);
  const [name, setName] = useState('Task Name');

  const onChange = (nameValue) => setName(nameValue);
  
  var testTime = '';

  const test = {
    type: 'task',
    name: 'Test',
    location: 'Prime',
    day: 'Wednesday',
    get prop5() {return testTime;}
  };

  const toggleTimePicker = () => {
    setTimePickerVisibility(!isTimePickerVisible);
  };

  const handleConfirm = dateTime => {
    toggleTimePicker();

    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var ampm = hours > 12 ? 'PM' : 'AM';
    var newTime = 
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
            <Text style={styles.boldHeadingText}>Edit Task</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                closeModal();
              }}
            >
              <Icon name="times" color="white" size={25}></Icon>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.container}>
            <TextInput placeholder={task.name} style={styles.text} onChangeText={onChange}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>{time}</Text>
          </View>
          <View style={styles.buttonRow}>
            <Button title="Select Time" onPress={toggleTimePicker} />
            <DateTimePicker
              isVisible={isTimePickerVisible}
              mode="time"
              is24Hour={false}
              onConfirm={handleConfirm}
              onCancel={toggleTimePicker}
            />
            <TouchableWithoutFeedback
              onPress={() => {
                task.name = name;
                task.time = time;
                editTask(task);
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

export default EditTaskModal;
