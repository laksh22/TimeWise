import React from 'react';
import { Text, View } from 'react-native';

import { GlobalProvider } from './context/GlobalState';
import styles from './styles';
import TasksPage from './components/Tasks/TasksPage';

const App = () => {
  return (
    <GlobalProvider>
      {/* <View style={styles.introPage}>
        <Text style={styles.text}>This is the intro page</Text>
      </View> */}
      <TasksPage></TasksPage>
    </GlobalProvider>
  );
};

export default App;
