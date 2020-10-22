import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './src/screens/Search';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
        <Stack.Screen name="Search"  component={Search} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d6d6',

  },
});

