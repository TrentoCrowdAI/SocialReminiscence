import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView } from 'react-native';

export default class Login extends React.Component { 
  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior="padding"
        keyboardVerticalOffset ={20} 
        > 
          <Text style={styles.enter} >Enter the name to connect as:</Text> 
          <TextInput autoCapitalize="words" 
                     autoCorrect={false}
                     autoFocus
                     keyboardType="default"
                     maxLength={ 20 }
                     placeholder="Username"
                     returnKeyType="done"
                     enablesReturnKeyAutomatically
                     style={styles.username}
                     onSubmitEditing={this.props.onSubmitName}
                     />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  enter: {
    fontSize: 25,
    margin: 5,
  },
  username: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 20,
  }
});