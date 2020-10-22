import * as React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Title } from 'react-native-paper';
const Header = () => {
  return (
    <View style={{ backgroundColor: '#00aaff', padding: 5 }}>
      <View style={{ alignItems: "center" }}>
        <Title style={{ color: "white", fontSize: 32, fontWeight: "bold", marginVertical: 10 }}>MoviePur </Title>
      </View>
    </View>
  );
};
export default Header