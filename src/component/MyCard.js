import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const MyCard = (props) => (
    <View>
        <View style={{
            backgroundColor: "#00aaff",
            margin: 3, padding: 3,
            borderRadius: 10,
            elevation: 4
        }}>
            <View>
                <View style={{ flexDirection: "row", }}>
                    <Image
                        style={{
                            width: "45%", height: "100%",
                            resizeMode: "contain",
                            borderRadius: 10
                        }}
                        source={{ uri: props.poster }} />
                    <View style={{ width: "50%", padding: 5 }}>
                        <Title style={{
                            color: "white"
                        }} >
                            <MaterialIcons name="movie" size={24} color="black" />
                            {props.Title} ({props.year})
                             </Title>
                        <Text style={{
                            color: "white",
                        }}>
                            <FontAwesome name="imdb" size={24} color="black" />
                                {props.imdbrating}
                            <Text
                            style={{
                                color: "white"
                            }}>
                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                    Type :-</Text> {props.type}</Text>
                        </Text>
                        <Text style={{
                            color: "white"
                        }} numberOfLines={2} ellipsizeMode="tail"><Text style={{ color: "black", fontWeight: "bold" }}>Actors :-</Text>{props.actors}</Text>
                        <Text
                            style={{
                                color: "white"
                            }}
                            numberOfLines={2} ellipsizeMode="tail">
                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                    Genres :-</Text> {props.genres}</Text>
                        <Paragraph
                            style={{
                                color: "white"
                            }}
                            numberOfLines={3} ellipsizeMode="tail" >
                            <Text style={{
                                color: "black",
                                fontWeight: "bold"
                            }}>Storyline :-</Text>
                            {props.disc}
                        </Paragraph>
                    </View>
                </View>
            </View>
        </View>
    </View>
);
export default MyCard