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

export default class Title extends Component<Props>{
    render(){
        return (
            <View style = {styles.titleContainer}> 
                <Image source={require('../Icon/logo.png')} style={styles.logo}/> 
                <Text style={styles.title}>Storygram</Text>
            </View> 
        );
    }
}


const styles = StyleSheet.create({
    titleContainer: {
        height: 70,
        backgroundColor: 'rgba(34,152,101,80)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }, 

    logo:{
        height: 45,
        width:45,
        resizeMode: 'cover',
        marginRight: 10,
        //marginBottom: 10,
        marginLeft: 20,
        //backgroundColor: 'red',
        tintColor: 'white',

    },

    title: {
        fontFamily: 'Athelas',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: '700',
        color: 'white',
        marginTop: 7,
        letterSpacing: 1,
    },
});