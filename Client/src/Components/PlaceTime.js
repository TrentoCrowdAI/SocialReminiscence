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

export default class MainComponent extends Component<Props>{
    render(){
        return (
            <View style= {styles.buttonContainer}> 
                <View style = {styles.placeTimeContainer}>
                    <Text style = {styles.infoText}>Place, Time </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    buttonContainer: {
        width: (widthImage * (1/3)), 
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'red',
    },

    placeTimeContainer: {
        //backgroundColor: 'rgb(162,199,255)',
        height: 40,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 14,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },

    infoText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});