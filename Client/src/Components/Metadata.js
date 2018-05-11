import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar
} from 'react-native';

import People from '../Components/People';
import PlaceTime from '../Components/PlaceTime';
import Title from '../Components/Title';


export default class Metadata extends Component<Props>{
    render(){
        return (
            <View style = {styles.infoContainer}>
                <Title />
                <PlaceTime />
                <People />
            </View> 
        );
    }
}


const styles = StyleSheet.create({
    infoContainer: {
        flex:1,
        backgroundColor: 'rgba(87,188,144,90)',
        paddingTop: Platform.OS === 'ios' ? 20 : 0, 
    }, 
});