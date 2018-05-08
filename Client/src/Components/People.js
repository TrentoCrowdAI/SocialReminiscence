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



export default class MainComponent extends Component<Props>{
    render(){
        return (
            <View style = {styles.people}>
                <Text style = {styles.peopleText}>
                    People in this photo: 
                </Text>
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
        marginTop: 10,
        //backgroundColor: 'red',
    },

    peopleText:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom : 8,
    },

    peoplePhotoContainer: {
        flex:1,
        flexDirection: 'row',
        //backgroundColor: 'red',
        justifyContent:'center',
        alignItems: 'center',
    },
});