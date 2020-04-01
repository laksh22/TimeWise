import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import { GlobalContext } from '../../context/GlobalState';
import styles from '../../styles';

const LoginPage = ({ navigation }) => {
  const { getTasks } = useContext(GlobalContext);

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={styles.loginPageContainer}>
      <View>
        <Image
          style={{
            width: 100,
            height: 104
          }}
          source={require('../../assets/doorIcon.png')}
        />
      </View>
      <Text style={styles.boldMediumText}>Use your NTU credentials to</Text>
      <Text style={styles.titleText}>Login</Text>

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
            getTasks(email, password);
            onChangeEmail('');
            onChangePassword('');
            navigation.navigate('TasksPage');
          }}
        >
          <Text style={styles.button}>LOGIN</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LoginPage;
