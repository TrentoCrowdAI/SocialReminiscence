import React from 'react';
import { View, Dimensions, StyleSheet, Platform} from 'react-native';

const widthDevice = Dimensions.get('window').width; 		//get the device's width 

export default function (props) {

    return (
        <View 
          style = { styles.container} 
         />
    );
}


const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        height: 20, 
              width: widthDevice, 
              backgroundColor: 'white', 
              zIndex: 3, 
              position: 'absolute', 
              top: 0,  
              left: 0,
      }
    }),
  },
});