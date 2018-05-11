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

export default class Triangle extends Component<Props>{
    render(){
      return (
        <View style={[styles.triangle, this.props.style]} />
      );
    }
  }
  
  const styles = StyleSheet.create({
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 15,
      borderRightWidth: 15,
      borderBottomWidth: 17,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'white'
    }
  });