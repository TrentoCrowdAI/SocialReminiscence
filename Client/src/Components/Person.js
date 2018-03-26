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
		height: Platform.OS === 'ios' ? 140 : 105, 
		width: Platform.OS === 'ios' ? 100 : 85,
		backgroundColor: 'rgb(162,199,255)',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
	},

	photo: {
		height: Platform.OS === 'ios' ? 110 : 70,
		width: Platform.OS === 'ios' ? 90 : 70,
		resizeMode: 'contain',
	},

	name: {
		fontSize: 16,
		fontWeight: 'bold',
	},

});

export default Person;