import * as React from 'react';
import { View, Image } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const MyCard = () => (
<View>
    <View style={{ backgroundColor: "#00aaff", margin:3,padding: 3, borderRadius: 10, elevation: 4 }}>
        <View>
            <View style={{ flexDirection: "row" }}>
                <Image
                    style={{ width: "45%", height: 200, resizeMode: 'contain', borderRadius: 10 }}
                    source={{ uri: 'https://picsum.photos/700' }} />
                <View>
                    <Title><MaterialIcons name="movie" size={24} color="black" /> Movie Name (year)</Title>
                    <Title><FontAwesome name="imdb" size={24} color="black" />IMDb
                    <Title><FontAwesome name="imdb" size={24} color="black" />R T</Title></Title>
                    <Title><MaterialIcons name="favorite" size={24} color="black" />Actor</Title>
                    <Title>geners</Title>
                    <Paragraph>discriptions</Paragraph>
                </View>
            </View>
        </View>
    </View>
    <View style={{ backgroundColor: "yellow", padding: 3, borderRadius: 20, elevation: 4 }}>
        <View>
            <View style={{ flexDirection: "row" }}>
                <Image
                    style={{ width: "45%", height: 200, resizeMode: 'contain', borderRadius: 10 }}
                    source={{ uri: 'https://picsum.photos/700' }} />
                <View>
                    <Title><MaterialIcons name="movie" size={24} color="black" /> Movie Name (year)</Title>
                    <Title><FontAwesome name="imdb" size={24} color="black" />IMDb
                    <Title><FontAwesome name="imdb" size={24} color="black" />R T</Title></Title>
                    <Title><MaterialIcons name="favorite" size={24} color="black" />Actor</Title>
                    <Title>geners</Title>
                    <Paragraph>discriptions</Paragraph>
                </View>
            </View>
        </View>
    </View>
    </View>
);
export default MyCard