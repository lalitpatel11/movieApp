import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, TextInput,TouchableOpacity } from 'react-native';
import Header from '../component/Header';
import { FontAwesome } from '@expo/vector-icons';
import MyCard from '../component/MyCard';
import { Title } from 'react-native-paper';
 const Search=({navigation})=> {
  
  const [value, SetValue] = useState("")
  const [cardData, setCardData] = useState([])
  const fetchData = () => {
    fetch(`http://www.omdbapi.com/?t=${value}&apikey=2d37d616`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCardData(data)
      }).catch(err => {
        console.log(err)
      })
    
  }
  const viewTitle=cardData.Title;
  return (
    <TouchableOpacity style={{ flex: 1, marginTop: 20 }} 
    onPress={()=>navigation.navigate("Home",{id:viewTitle})
    }>
    <View >
      <Header />
      <View style={{ flexDirection: "row" ,backgroundColor:"#00aaff",padding:5}}>
        <TextInput 
        placeholder="Enter movie name"
        style={{ 
          width: "80%", 
          backgroundColor: "#0079b5", 
          fontSize: 24, color: "white", }}
          onChangeText={text => SetValue(text)}
          value={value}
          />
        <FontAwesome
         name="search" 
         onPress={()=>fetchData()}
         style={{ marginLeft: 10, borderRadius: 20, padding: 6, backgroundColor: "#1d7891" }} size={34} color="white" />
      </View>
      <MyCard
       Title={cardData.Title}
       year={cardData.Year}
       poster={cardData.Poster}
       imdbrating={cardData.imdbRating}
          type={cardData.Type}
     actors={cardData.Actors}
     genres={cardData.Genre}
     disc={cardData.Plot}
      />
    </View>
    </TouchableOpacity>
  );
}
export default Search

