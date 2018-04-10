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

import StatusBar1 from '../Components/StatusBar1';
import ChatClient from '../Components/ChatClient'

import Orientation from 'react-native-orientation';
import Person from '../Components/Person';


const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const heightDevice = window.height;
const heightDeviceAndroid = window.height - StatusBar.currentHeight;

const widthImage = (widthDevice * (2/3));
const heightImage = (heightDevice * (3/4));
const heightImageAndroid = (heightDeviceAndroid * (3/4));

const widthChat= (widthDevice * (1/3));

export default class MainPage extends Component<Props> {
  componentDidMount() {
    // this locks the view to Landscape Mode
      Orientation.lockToLandscape();
    }


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
    });
  }

  // handleMessage(picture) {
  //     this.setState({
  //       pictures: picture
  //     });
  //   }


  render() {

    const picture = this.state.pictures;
    console.log(`picture: ${picture}`);

    return (
      <View style={styles.container}>
        <StatusBar1/>
        <View style = {styles.imageSection}> 
          <View style = {styles.imageContainer}>
            <Image 
               source={{uri: `${picture}` }}            
               style= {styles.image}
            />
          </View>

          <View style = {styles.infoContainer}> 
            <View style= {styles.buttonContainer}> 
              <View style = {styles.placeTimeContainer}>
                <Text style = {styles.infoText}>Place </Text>
              </View>

              <View style = {styles.placeTimeContainer}>
                <Text style = {styles.infoText}>Time </Text>
              </View>
            </View>

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
          </View> 
        </View>

        <View style = {styles.chatSection}> 
          <View style = { styles.chatTitleContainer}>
            <Text style = {styles.chatTitle}>
              Chat 
            </Text>
          </View>

          <ChatClient name={ this.state.name } onReceivedMessage={this.checkIfUrl}/>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? heightDevice : heightDeviceAndroid,
    width: widthDevice,

  },

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

  infoContainer: {
    flex:1,
    flexDirection: 'row',
  }, 

  buttonContainer: {
    width: (widthImage * (1/3)), 
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'red',
  },

  placeTimeContainer: {
    backgroundColor: 'rgb(162,199,255)',
    height: 40,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 14

  },

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

  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  chatSection: {
    alignItems: 'center',
    width: widthChat,
    height: Platform.OS === 'ios' ? heightDevice : heightDeviceAndroid,
    //backgroundColor: 'rgb(162,199,255)',
  },

  chatTitleContainer: {
    marginTop: Platform.OS === 'ios' ? 20 : 10, 
    height: Platform.OS === 'ios' ? 50 : 35 , 
    //backgroundColor : 'rgb(162,199,255)', 
    width: widthChat,
    alignItems: 'center'
  },

  chatTitle :{
    fontSize: 30,
    fontWeight: 'bold',
  },

});