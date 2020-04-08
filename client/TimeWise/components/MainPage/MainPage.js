import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import styles from '../../styles';

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.homePage}>
      <Image
        style={{ width: 275, height: 225, marginTop: 70 }}
        source={require('../../assets/imageHandIcon.png')}
      />

      <Image
        style={{ width: 425, height: 120 }}
        source={require('../../assets/timewiseIcon.png')}
      />

      <TouchableHighlight onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.button}>LOGIN</Text>
      </TouchableHighlight>
    </View>
  );
};

export default MainPage;
