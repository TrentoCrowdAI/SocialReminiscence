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
import ChatClient from '../Components/ChatClient';

const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const heightDevice = window.height;
const heightDeviceAndroid = window.height - StatusBar.currentHeight;

const widthImage = widthDevice * (5/7);
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

    // resize(uri){
    //     console.log("resize");

    //     let result;

    //    return Image.getSize(uri, (width, height) => {
    //         console.log("width: " + (Platform.OS === 'ios' ? heightImage : heightImageAndroid)/height*width);
    //         console.log("uri:" + uri);
    //         if (height>width){
    //             result = {
    //                 height: Platform.OS === 'ios' ? heightImage : heightImageAndroid,
    //                 width: (Platform.OS === 'ios' ? heightImage : heightImageAndroid)/height*width,
                    
    //             }
    //         } else {
    //             result = {
    //                 width: widthImage,
    //                 height: widthImage/width*height,
    //             }
    //         }
    //         console.log("result; "+ JSON.stringify(result,null,"   "));
    //         return result;
    //     });  
    // }

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

            <View style = {styles.imageSection}> 
                <View style = {styles.imageContainer}>
                    <Image 
                        source={{uri: `${pictures}` }}            
                        // style= {[this.resize(`${pictures}`), styles.image]}
                        style= { styles.image}
                    />
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Description</Text>
                    </View>
                </View>

                <ChatClient name={ this.state.name } onReceivedMessage={this.checkIfUrl}/>
             </View>
        );
    }
}


const styles = StyleSheet.create({
    imageSection: {
        justifyContent: 'center',
        width: widthImage + 20,
        height: Platform.OS === 'ios' ? heightDevice : heightDeviceAndroid,
        margin: 10,
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
        // backgroundColor: 'blue',
    },

    descriptionContainer:{
        width: widthImage,
        alignItems: 'flex-end',
    },

    description:{
        fontSize:16,
        fontStyle: 'italic',
        fontFamily: 'Avenir Next',
        marginRight: 10,
        color: 'rgb(2,81,75)',
    },
});

