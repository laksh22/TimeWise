import React, { useContext } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GlobalContext } from '../../context/GlobalState';

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
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3C3C3C',
    flex: 1,
    width: Dimensions.get('window').width * 0.6
  },
  sidebarHeading: {
    color: '#DDDDDD',
    fontWeight: '100',
    fontSize: 30
  },
  sidebarText: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: '#FFFFFF',
    fontWeight: '100',
    fontSize: 27
  },
  sidebarRow: {
    paddingHorizontal: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#747474',
    borderBottomWidth: 2
  }
});

export default Sidebar;
