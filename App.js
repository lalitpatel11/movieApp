import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,Alert ,FlatList,TouchableOpacity} from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  
  return (
   <View style={{flex:1}}>
 <Home/>
   </View>
  );
}


