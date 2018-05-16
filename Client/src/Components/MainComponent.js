import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Person from '../Components/Person';
import Metadata from '../Components/Metadata';
import ChatClient from '../Components/ChatClient';

const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const heightDevice = window.height;
const heightDeviceAndroid = window.height - StatusBar.currentHeight;

const widthImage = widthDevice * (4/7);
const heightImage = heightDevice * (3/4) - 10;
const heightImageAndroid = (heightDeviceAndroid * (3/4) - 10);

export default class MainComponent extends Component<Props>{

    constructor(props) {
        super(props);
        this.state = {
          name: this.props.name,
          pictures: 'https://firebasestorage.googleapis.com/v0/b/storygram-a2b95.appspot.com/o/logo.001.jpeg?alt=media&token=24884208-c446-48c1-9de3-24f36d9f3fcf'
        };
    this.checkIfUrl = this.onReceivedMessage.bind(this);
    }


    onReceivedMessage(message){
        let columns = message.split(' ');
        columns.forEach((element) => {
          if(element.startsWith('http')){
            this.setState({
             pictures: element
            });
          }
          console.log("picture: " + this.state.pictures);
        });
      }
    




    render(){
        const pictures=this.state.pictures;

        return (
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style = {styles.imageSection} > 
                    <View style = {styles.imageContainer}>
                        <Image 
                            source={{uri: `${pictures}` }}            
                            style= { styles.image}
                        />
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>Description</Text>
                        </View>
                    </View>
                    <ChatClient name={ this.state.name } onReceivedMessage={this.checkIfUrl}/>
                </View>
             </KeyboardAwareScrollView>
        );
    }
}


const styles = StyleSheet.create({
    imageSection: {
        justifyContent: 'center',
        width: widthImage - 140,
        height: Platform.OS === 'ios' ? heightDevice : heightDeviceAndroid,
        //backgroundColor: 'skyblue',
    },

    imageContainer:{
        height: Platform.OS === 'ios' ? heightImage : heightImageAndroid,
        width: widthImage + 140,
        //backgroundColor: 'powderblue',
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 5,
        margin: 10,
    },

    image: {
        height: Platform.OS === 'ios' ? heightImage : heightImageAndroid,
        width: widthImage + 140,
        resizeMode: 'contain',
        // backgroundColor: 'blue',
    },

    descriptionContainer:{
        width: widthImage + 140,
        alignItems: 'flex-end',
        //backgroundColor: 'red'
    },


    description:{
        fontSize:16,
        fontStyle: 'italic',
        fontFamily: 'Avenir Next',
        marginRight: 10,
        color: 'rgb(2,81,75)',
    },
});

