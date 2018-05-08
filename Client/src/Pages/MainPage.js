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
import ChatClient from '../Components/ChatClient';
import MainComponent from '../Components/MainComponent';

import Orientation from 'react-native-orientation';


const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const heightDevice = window.height;
const heightDeviceAndroid = window.height - StatusBar.currentHeight;

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

  render() {
    return (
      <View style={styles.container}>
        <StatusBar1/>
        <MainComponent picture={this.state.pictures}/>
        <ChatClient name={ this.state.name } onReceivedMessage={this.checkIfUrl}/>
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

  chatSection: {
    alignItems: 'center',
    width: widthChat,
    height: Platform.OS === 'ios' ? heightDevice : heightDeviceAndroid,
    //backgroundColor: 'rgb(162,199,255)',
  },


});