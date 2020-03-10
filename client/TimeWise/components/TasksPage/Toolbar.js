import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles';
import Sidebar from '../Sidebar/Sidebar';

Toolbar = ({ navigation }) => {
  const [visible, toggleVisible] = useState(false);

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
