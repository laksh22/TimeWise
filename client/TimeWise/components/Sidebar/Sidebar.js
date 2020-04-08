import React, { useContext } from 'react';
import { Modal, Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GlobalContext } from '../../context/GlobalState';
import styles from '../../styles';

const Sidebar = props => {
  const { visible, closeModal, navigation } = props;

  const { getTasks } = useContext(GlobalContext);

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <View style={styles.sidebarContainer}>
        <View style={styles.sidebarRow}>
          <Text style={styles.sidebarHeading}>Settings</Text>
          <TouchableWithoutFeedback onPress={() => closeModal()}>
            <Icon name="times" color="white" size={25}></Icon>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.sidebarRow}>
          <TouchableWithoutFeedback
            onPress={() => {
              getTasks();
              closeModal();
            }}
          >
            <Text style={styles.sidebarText}>Refresh Schedule</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.sidebarRow}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('LoginPage')}
          >
            <Text style={styles.sidebarText}>Logout</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

export default Sidebar;
