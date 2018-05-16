import React from 'react';
import { StyleSheet, 
          Text, 
          TextInput, 
          FlatList, 
          KeyboardAvoidingView,
          View,
          Dimensions,
          TouchableHighlight,
          Image,
    } from 'react-native';
import Message from './Message';

const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const widthChat= (widthDevice * (5/7) - 20);


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
    //console.log("Chat.js message:" + JSON.stringify(this.props.messages));
  }


//funzione per inviare con il multiline attivo 
  contentSizeChange(event){
        if(this.state.lastText.split("\n").length != this.state.text.split("\n").length){
            this.handleSendMessage();
        }else{
          if (event.nativeEvent.contentSize.height < 55) {
            this.setState({
                inputHeight : event.nativeEvent.contentSize.height < 40 ? 40 : event.nativeEvent.contentSize.height
            })
          }
        }
    }


  



  render() { 
    return (
      <View style={styles.container}>
        <View>
            <Message messages={this.props.messages}/>
              <View style = {styles.keyboard}>
                  <Image 
                    style={styles.plus}
                    source={require('../Icon/plus.png')}
                  />
                  <View style = {styles.border} >
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
                  </View>
                

                <TouchableHighlight 
                  onPress={this.handleSendMessage}
                  style = {styles.sendButton}
                  >
                    <Text style = {styles.send} >Send</Text>
                </TouchableHighlight>
            </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: widthChat ,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10
    
  },

  keyboard: {
    flexDirection : 'row', 
    justifyContent: 'flex-end',
  },

  plus: {
    width: 40, 
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  border: {
    width: widthChat * (4/5) - 70,
    borderColor: 'lightgrey',
    borderWidth: 1,
    margin: 5,
    borderRadius: 17,
  },

  input: {
    alignSelf: 'stretch',
    fontSize: 20,
    width: widthChat * (4/5) - 90,
    marginLeft: 10,
    marginRight: 10,

  },

  sendButton:{
    width : widthChat * (1/5) - 5 ,
    margin: 5,
    marginLeft: 10,
    marginRight: 0,
    backgroundColor: 'rgb(18,109,215)',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  send: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});