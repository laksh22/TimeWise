import React, { Component, useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  StatusBar,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import { GlobalContext } from '../../context/GlobalState';

const LoginPage = ({ navigation }) => {
  const { getTasks } = useContext(GlobalContext);

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.idk}
          source={require('../../assets/doorIcon.png')}
        />
      </View>
      <Text style={styles.text1}>Use your NTU credentials to</Text>
      <Text style={styles.text2}>Login</Text>

      <View
        style={{
          alignItems: 'center',
          width: Dimensions.get('window').width * 0.8
        }}
      >
        <TextInput
          style={styles.emailTextBox}
          onChangeText={text => onChangeEmail(text)}
          value={email}
          placeholder="NTU Email"
        />
        <TextInput
          style={styles.passwordTextBox}
          onChangeText={text => onChangePassword(text)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableHighlight
          onPress={() => {
            onChangeEmail('');
            onChangePassword('');
            //getTasks(email, password);
            navigation.navigate('TasksPage');
          }}
        >
          <Text style={styles.buttonStyle}>LOGIN</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop:
      StatusBar.currentHeight + Dimensions.get('window').height * 0.06,
    paddingLeft: Dimensions.get('window').width * 0.1
  },
  logoContainer: {
    marginTop: 63
  },
  idk: {
    width: 100,
    height: 104
  },
  text1: {
    fontSize: 24,
    color: 'white',
    fontStyle: 'italic',
    fontFamily: 'Roboto',
    fontWeight: '300'
  },
  text2: {
    fontSize: 50,
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Roboto'
  },
  emailTextBox: {
    marginTop: Dimensions.get('window').height * 0.14,
    borderRadius: 10,
    backgroundColor: '#2B2B2B',
    width: Dimensions.get('window').width * 0.8,
    fontSize: 25,
    color: '#EEEEEE',
    padding: 10
  },
  passwordTextBox: {
    marginTop: Dimensions.get('window').height * 0.03,
    borderRadius: 10,
    backgroundColor: '#2B2B2B',
    width: Dimensions.get('window').width * 0.8,
    fontSize: 25,
    color: '#EEEEEE',
    padding: 10
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

export default LoginPage;
