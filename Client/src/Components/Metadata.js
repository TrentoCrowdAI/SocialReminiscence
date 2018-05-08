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


export default class MainComponent extends Component<Props>{
    render(){
        return (
            <View style = {styles.infoContainer}> 
                <PlaceTime />
                <People />
            </View> 
        );
    }
}


const styles = StyleSheet.create({
    infoContainer: {
        flex:1,
        flexDirection: 'row',
    }, 
});