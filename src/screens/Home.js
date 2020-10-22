import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar, Title } from 'react-native-paper';
import { Card } from 'react-native-paper';
import Header from '../component/Header';

const Home = ({route}) => {
    const title=route.params.id
    const [cardData, setCardData] = useState([])
    
        fetch(`http://www.omdbapi.com/?t=${title}&apikey=2d37d616`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCardData(data)
            }).catch(err => {
                console.log(err)
            })
 
    return (
        <ScrollView>
            <View style={{
                backgroundColor: "#ebe8e8"
            }} >
                <Header />

                <View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"#dbdbdb",
                        margin:2,
                    }}>
                    <Title>{cardData.Title} ({cardData.Year})</Title>
                    <Title>{cardData.Released}</Title>
                    </View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"white",
                        margin:2,
                    }}>
                    <Title>Rating</Title>
                    <Text>IMDb :- {cardData.imdbRating}</Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"#dbdbdb",
                        margin:2,
                        padding:2
                    }}>
                    <Image
                        style={{
                            width: "70%",
                            height: 400,
                            resizeMode: "contain",
                            borderRadius: 10
                        }}
                        source={{ uri: cardData.Poster }}
                    />
                    </View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"white",
                        margin:2,
                    }}>
                    <Title>Storyline</Title>
                    <Text>{cardData.Plot}</Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"#dbdbdb",
                        margin:2,
                    }}>
                    <Title>Actors</Title>
                    <Text>{cardData.Actors}</Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"white",
                        margin:2,
                    }}>
                    <Title>Director</Title>
                    <Text>{cardData.Director}</Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"#dbdbdb",
                        margin:2,
                    }}>
                    <Title>Genres </Title>
                    <Text>{cardData.Genre}</Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"white",
                        margin:2,
                    }}>
                    <Title>{cardData.Type}</Title>
                    <Text>Runtime:-{cardData.Runtime}</Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"#dbdbdb",
                        margin:2,
                    }}>
                    <Title>Writer</Title>
                    <Text>{cardData.Writer}</Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        elevation:4,
                        backgroundColor:"#00aaff",
                        margin:2,
                    }}>
                    <Title>Thank You</Title>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
};
export default Home