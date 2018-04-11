import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  KeyboardAvoidingView,
  Dimensions, 
  TouchableHighlight 
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
                     placeholder="Name"
                     returnKeyType="done"
                     enablesReturnKeyAutomatically
                     style={styles.username}
                     onSubmitEditing={this.handleSendMessage}
                     onChangeText = {(name) => this.setState({name})}
                     />
          <TouchableHighlight 
                  onPress={this.handleSendMessage}
                  style = {styles.sendButton}
                  >
                    <Text style = {styles.send} >Log In</Text>
                </TouchableHighlight>
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

  username: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 20,
  }
});