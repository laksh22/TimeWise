import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles';

const Toolbar = () => {
  return (
    <View style={styles.toolbar}>
      <TouchableWithoutFeedback
        onPress={() => {
          alert('TODO: Open settings sidebar');
        }}
      >
        <Icon name="bars" color="white" size={25}></Icon>
      </TouchableWithoutFeedback>

      <Text style={styles.lightHeadingText}> Next 7 Days</Text>
    </View>
  );
};

export default Toolbar;
