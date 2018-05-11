import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const Person =(props) => {
	return (
		<View style = {styles.personContainer}>
			<Image 
				source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-256.png'}}     				
				style= {styles.photo}
       			/>
       		<View style = {{marginBottom : 5 }}>
				<Text style = {styles.name}>Person </Text>
			</View>
		</View>
	);
}


const styles = StyleSheet.create ({
	personContainer: {
		height: Platform.OS === 'ios' ? 120 : 105, 
		width: Platform.OS === 'ios' ? 100 : 85,
		//backgroundColor: 'rgb(162,199,255)',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
	},

	photo: {
		height: Platform.OS === 'ios' ? 90 : 70,
		width: Platform.OS === 'ios' ? 90 : 70,
		resizeMode: 'contain',
		borderRadius: 45,
		borderWidth: 5,
		borderColor: 'white',
	},

	name: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		fontFamily: 'Avenir',
		fontWeight: '400',
	},

});

export default Person;