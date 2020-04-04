/*
 * Code for the top toolbar which has the hamburger menu button to open the sidebar
 */

// Import statements
import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles';
import Sidebar from '../Sidebar/Sidebar';

// Component begins here
Toolbar = ({ navigation }) => {
  const [visible, toggleVisible] = useState(false);

  // UI of the component
  return (
    <View style={styles.toolbar}>
      <TouchableWithoutFeedback
        onPress={() => {
          toggleVisible(true);
        }}
      >
        <Icon name="bars" color="white" size={25}></Icon>
      </TouchableWithoutFeedback>

      <Text style={styles.lightHeadingText}> Next 7 Days</Text>

      <Sidebar
        navigation={navigation}
        visible={visible}
        closeModal={() => toggleVisible(false)}
      ></Sidebar>
    </View>
  );
};

export default Toolbar;
