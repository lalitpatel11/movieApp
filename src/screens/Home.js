import * as React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import MyCard from '../component/MyCard';

const Home = () => {


    return (
        <View>
            <Appbar.Header style={{
                backgroundColor:"#00aaff"
            }}>
                <Appbar.Content  title="MoviePur"/>
            </Appbar.Header>
            <MyCard/>
        </View>

    );
};
export default Home