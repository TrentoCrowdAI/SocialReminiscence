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

import Person from '../Components/Person';
import Triangle from '../Components/Triangle'



export default class People extends Component<Props>{
    render(){
        return (
            <View style = {styles.people}>
                <View style={styles.stroke}>
                    <Text style = {styles.peopleText}>
                        In this photo
                    </Text>
                </View>
                <Triangle style={styles.triangleDown} />
                <View style = {styles.peoplePhotoContainer}> 
                    <Person /> 
                    <Person /> 
                    <Person />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    people: {
        flex : 1,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 45,
        //backgroundColor: 'red',
    },

    stroke:{
        borderBottomColor: 'white',
        borderBottomWidth: 5,
    },

    peopleText:{
        fontSize: 30,
        fontWeight: '600',
        margin: 5,
        marginBottom: 3,
        color: 'white',
        fontFamily: 'Avenir Next',
    },

    triangleDown: {
        transform: [
          {rotate: '180deg'}
        ]
      },

    peoplePhotoContainer: {
        flex:1,
        justifyContent:'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },


});