import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles';

Toolbar = () => {
  return (
    <View style={styles.toolbar}>
      <Icon name="bars" color="white" size={25}></Icon>
      <Text style={styles.lightHeadingText}> Next 7 Days</Text>
    </View>
  );
};

export default Toolbar;
