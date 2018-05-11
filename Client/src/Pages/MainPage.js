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
import Metadata from '../Components/Metadata';
import Orientation from 'react-native-orientation';


const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const heightDevice = window.height - StatusBar.currentHeight;
const heightDeviceAndroid = window.height ;


export default class MainPage extends Component<Props> {
  componentDidMount() {
    // this locks the view to Landscape Mode
      Orientation.lockToLandscape();
    }


  constructor(props) {
      super(props);
      this.state = {
        name: this.props.name,
        //pictures: 'https://firebasestorage.googleapis.com/v0/b/storygram-a2b95.appspot.com/o/logo.001.jpeg?alt=media&token=24884208-c446-48c1-9de3-24f36d9f3fcf'
      };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar1/>
        <View style={styles.container}>
          <MainComponent  name={this.props.name}/>
          <Metadata />
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
});