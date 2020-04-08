/*
 * Code for tags identifying if a to-do item is a Class or a Task
 */

// Import statements
import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../styles';

// Component begins here
const Tag = (props) => {
  const borderStyle = props.type == 'class' ? styles.classTag : styles.taskTag;

  // UI of the component
  return (
    <View style={borderStyle}>
      <Text style={styles.text}>
        {props.type == 'class' ? 'CLASS' : 'TASK'}
      </Text>
    </View>
  );
};

export default Tag;
