import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  KeyboardAvoidingView,
  Dimensions, 
  TouchableHighlight,
  View,
} from 'react-native';

export default class Login extends React.Component { 

  constructor(props) {
    super(props);
    this.handleSendMessage = this.onSubmitName.bind(this);
    this.state ={
      name: ''
    }
  }

  onSubmitName() { 
    this.props.onSubmitName(this.state.name);
  }

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.keyboard} 
        behavior="padding"
        keyboardVerticalOffset ={20} 
        > 
          <View style={styles.container} >
              <Text style={styles.enter} >Enter your name: </Text> 
              <TextInput autoCapitalize="words" 
                         autoCorrect={false}
                         autoFocus
                         keyboardType="default"
                         maxLength={ 20 }
                         placeholder="Name"
                         returnKeyType="done"
                         enablesReturnKeyAutomatically
                         style={styles.name}
                         onSubmitEditing={this.handleSendMessage}
                         onChangeText = {(name) => this.setState({name})}
                         />
              <TouchableHighlight 
                      onPress={this.handleSendMessage}
                      style = {styles.sendButton}
                      >
                        <Text style = {styles.send} >Log In</Text>
              </TouchableHighlight>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({ 
  keyboard: {
    flex: 1,
    backgroundColor: '#fff',
 //   alignItems: 'center',
 //   justifyContent: 'center'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  enter: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
  },

  sendButton:{
    width : Dimensions.get('window').width * (1/9) - 20,
    margin: 5,
    backgroundColor: 'rgb(162,199,255)',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  send: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  name: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  }
});