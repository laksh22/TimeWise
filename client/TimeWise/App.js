import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalProvider } from './context/GlobalState';

import styles from './styles';

const App = () => {
  return (
    <GlobalProvider>
      <View style={styles.introPage}>
        <Text style={styles.text}>This is the intro page</Text>
      </View>
    </GlobalProvider>
  );
};

export default App;
