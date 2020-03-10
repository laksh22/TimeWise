import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GlobalProvider } from './context/GlobalState';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import TasksPage from './components/TasksPage/TasksPage';
import Sidebar from './components/Sidebar/Sidebar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TasksPage"
            component={TasksPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sidebar"
            component={Sidebar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
