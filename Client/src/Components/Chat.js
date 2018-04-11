import React from 'react';
import { StyleSheet, 
          Text, 
          TextInput, 
          FlatList, 
          KeyboardAvoidingView,
          View,
          Dimensions,
          TouchableHighlight
    } from 'react-native';
    

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.handleSendMessage = this.onSendMessage.bind(this);
    this.state ={
      text: '',
      lastText : '',
      inputHeight:40,
    }
  }


  onSendMessage() { 
    this.props.onSendMessage(this.state.text);
    this.setState({text: ''});
    this.refs.messages.scrollToEnd();
  }


//funzione per inviare con il multiline attivo 
  contentSizeChange(event){
        if(this.state.lastText.split("\n").length != this.state.text.split("\n").length){
            this.handleSendMessage();
        }else{
          if (event.nativeEvent.contentSize.height < 110) {
            this.setState({
                inputHeight : event.nativeEvent.contentSize.height < 40 ? 40 : event.nativeEvent.contentSize.height
            })
          }
        }
    }


  



  render() { 
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>    
            <FlatList data={ this.props.messages } 
                  renderItem={ this.renderItem }
                  styles={ styles.messages } 
                  ref="messages" />

            <View style = {{flexDirection : 'row', justifyContent: 'flex-end'}}>
                <TextInput autoFocus
                           keyboardType="default"
                           returnKeyType="done"
                           enablesReturnKeyAutomatically
                           style={ [styles.input , {height: this.state.inputHeight}] }
                           blurOnSubmit={ false }
                           //onSubmitEditing={ this.handleSendMessage}
                           onChangeText = {(text) => this.setState({text})}
                           onContentSizeChange={(event) => this.contentSizeChange(event)}
                           value = {this.state.text}
                           ref='input'
                           multiline = {true}
                           placeholder = "Message"
                           />

                <TouchableHighlight 
                  onPress={this.handleSendMessage}
                  style = {styles.sendButton}
                  >
                    <Text style = {styles.send} >Send</Text>
                </TouchableHighlight>
            </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  renderItem({item}) { 
    const action = item.action;
    const name = item.name;

    if (action == 'join') {
        return( 
          <Text style={ styles.joinPart }>{ name } has joined</Text>);
    } else if (action == 'part') {
        return (
          <Text style={ styles.joinPart }>{ name } has left</Text>);
    } else if (action == 'message') {
        return (
          <View style = { styles.messagesChat}>
              <Text style={ styles.name }>{ name }: </Text>
              <Text style={ styles.messageText }>{ item.message }</Text>
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: (Dimensions.get('window').width / 3 ) - 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10
    
  },
  messages: {
    alignSelf: 'stretch',
    width: (Dimensions.get('window').width / 3 ) - 10,
    margin:5,
    backgroundColor: 'blue'
  },

  messagesChat: {
    width: (Dimensions.get('window').width / 3 ) - 10,
    margin: 8,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },


  messageText: {
    fontSize : 20,
  },

  input: {
    alignSelf: 'stretch',
    fontSize: 20,
    width: Dimensions.get('window').width * (2/9),
    borderColor: 'lightgrey',
    borderWidth: 1,
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

  joinPart: {
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
  }
});