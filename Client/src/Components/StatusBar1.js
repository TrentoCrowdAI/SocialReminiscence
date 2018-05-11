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

const widthDevice = Dimensions.get('window').width; 		//get the device's width 

export default class StatuBar1 extends Component<Props> {
  render(){
    return (
        <View style = { styles.container} >
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        height: 20, 
        width: widthDevice, 
        backgroundColor: 'white', 
        zIndex: 3, 
        position: 'absolute', 
        top: 0,  
        left: 0,
      }
    }),
  },
});