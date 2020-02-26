import React from 'react';
import { Modal, Text, View, Image } from 'react-native';

import styles from '../styles';

const Tag = props => {
  const borderStyle = props.type == 'class' ? styles.classTag : styles.taskTag;
  return (
    <View style={borderStyle}>
      <Text style={styles.text}>
        {props.type == 'class' ? 'Class' : 'Task'}
      </Text>
    </View>
  );
};

export default Tag;
