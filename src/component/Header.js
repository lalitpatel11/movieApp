import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,Alert ,FlatList,TouchableOpacity} from 'react-native';

export default function Header() {
  const [value, SetValue] = useState("")
  const [cardData,setCardData]=useState([])
  fetch(`http://www.omdbapi.com/?t=tarzen&apikey=2d37d616`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    setCardData(data)
    }).catch(err => {
     setCardData(data)
    })
  return (
   <View style={{flex:1,marginTop:20}}>
     <Text>
      movie title
     </Text>
     <Image
  source={{ uri:cardData.Poster }}
  style={{ 
    width: '100%', height: 200 ,
  resizeMode: 'contain'}}
/>
     <Text>
     {cardData.Error}
     </Text>
     <Text>
     {cardData.Year}
     </Text>
   </View>
  );
}


