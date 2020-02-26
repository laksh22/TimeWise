<<<<<<< HEAD
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalProvider } from './context/GlobalState';
||||||| merged common ancestors
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
=======
import React from 'react';
import { Text, View } from 'react-native';
>>>>>>> Create UI of task description modal

<<<<<<< HEAD
import styles from './styles';

const App = () => {
||||||| merged common ancestors
export default function App() {
=======
import { GlobalProvider } from './context/GlobalState';
import styles from './styles';

const App = () => {
>>>>>>> Create UI of task description modal
  return (
    <GlobalProvider>
      <View style={styles.introPage}>
        <Text style={styles.text}>This is the intro page</Text>
      </View>
    </GlobalProvider>
  );
};

export default App;
