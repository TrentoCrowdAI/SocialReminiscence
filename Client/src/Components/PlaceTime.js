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

const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const widthImage = (widthDevice * (2/3));

export default class PlaceTime extends Component<Props>{
    render(){
        return (
            <View style = {styles.placeTimeContainer}>
                <Image source={require('../Icon/location.png')} style={styles.location} />
                <View style={{borderBottomColor: 'white', borderBottomWidth: 1,}} >
                    <Text style = {styles.infoText}>Place, Time </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    placeTimeContainer: {
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 30, 
        flexDirection: 'row',
    },

    location:{
        height: 33,
        width: 33,
        resizeMode: 'contain',
        marginRight: 5,
    },

    infoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
        margin:5,
        marginLeft: 0,

    },
});