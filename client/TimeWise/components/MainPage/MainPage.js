import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageHandIcon}
        source={require('../../assets/imageHandIcon.png')}
      />

      <Image
        style={styles.imageTimewise}
        source={require('../../assets/timewiseIcon.png')}
      />

      <TouchableHighlight onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.buttonStyle}>LOGIN</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center'
  },

  imageTimewise: {
    width: 425,
    height: 120
    // marginTop: 279
  },

  imageHandIcon: {
    width: 275,
    height: 225,
    marginTop: 70
  },

  buttonStyle: {
    fontSize: 32,
    color: 'white', //text
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 15,
    marginTop: 100,
    backgroundColor: '#2AB1E3'
  }
});

export default MainPage;
