import React from 'react';
import { StyleSheet, 
          Text, 
          TextInput, 
          FlatList, 
          KeyboardAvoidingView,
          View,
          Dimensions,
    } from 'react-native';
    

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.handleSendMessage = this.onSendMessage.bind(this);
  }

  onSendMessage(e) { 
    this.props.onSendMessage(e.nativeEvent.text);
    this.refs.input.clear();
    this.refs.messages.scrollToEnd();
  }

  render() { 
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>    
            <FlatList data={ this.props.messages } 
                  renderItem={ this.renderItem }
                  styles={ styles.messages } 
                  ref="messages" />
        
            <TextInput autoFocus
                       keyboardType="default"
                       returnKeyType="done"
                       enablesReturnKeyAutomatically
                       style={ styles.input }
                       blurOnSubmit={ false }
                       onSubmitEditing={ this.handleSendMessage}
                       ref="input"
                       multiline = {true}
                       placeholder = "Message"
                       />
        </View>
      </KeyboardAvoidingView>
    );
  }

  renderItem({item}) { 
    const action = item.action;
    const name = item.name;

    if (action == 'join') {
        return <Text style={ styles.joinPart }>{ name } has joined</Text>;
    } else if (action == 'part') {
        return <Text style={ styles.joinPart }>{ name } has left</Text>;
    } else if (action == 'message') {
        return (
          <View style = { styles.messages}>
            <Text style={ styles.name }>{ name }: </Text>;
            <Text style={ styles.messageText }>{ item.message }</Text>;
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
    flexDirection: 'row',
    width: (Dimensions.get('window').width / 3 ) - 20,
    margin:5,
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
  },
  joinPart: {
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
  }
});