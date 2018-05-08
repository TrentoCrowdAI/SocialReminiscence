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
import Metadata from '../Components/Metadata';

const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const heightDevice = window.height;
const heightDeviceAndroid = window.height - StatusBar.currentHeight;

const widthImage = (widthDevice * (2/3));
const heightImage = (heightDevice * (3/4));
const heightImageAndroid = (heightDeviceAndroid * (3/4));

export default class MainComponent extends Component<Props>{
    render(){

        const picture=this.props.picture;

        return (

            <View style = {styles.imageSection}> 
                <View style = {styles.imageContainer}>
                    <Image 
                        source={{uri: `${picture}` }}            
                        style= {styles.image}
                    />
                </View>

                <Metadata />
             </View>
        );
    }
}


const styles = StyleSheet.create({
    imageSection: {
        width: widthImage,
        height: Platform.OS === 'ios' ? heightDevice : heightDeviceAndroid,
        //backgroundColor: 'skyblue',
    },

    imageContainer:{
        height: Platform.OS === 'ios' ? heightImage : heightImageAndroid,
        //backgroundColor: 'powderblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },

    image: {
        height: Platform.OS === 'ios' ? heightImage : heightImageAndroid,
        width: widthImage,
        resizeMode: 'contain',
    },
});
