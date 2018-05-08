import React from 'react';
import Pusher from 'pusher-js/react-native';
import Chat from './Chat';
import StatusBar from './StatusBar1';
import { StyleSheet, 
  View,
  Dimensions,
  Platform,
} from 'react-native';

import pusherConfig from '../../pusher.json';


const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const heightDevice = window.height;
const heightDeviceAndroid = window.height - StatusBar.currentHeight;

const widthChat= (widthDevice * (1/3));

export default class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.pusher = new Pusher(pusherConfig.key, pusherConfig); 

    this.chatChannel = this.pusher.subscribe('chat_channel'); 
    this.chatChannel.bind('pusher:subscription_succeeded', () => { 
      this.chatChannel.bind('join', (data) => { 
        this.handleJoin(data.name);
      });
      this.chatChannel.bind('part', (data) => { 
        this.handlePart(data.name);
      });
      this.chatChannel.bind('message', (data) => { 
        this.handleMessage(data.name, data.message);
      });
    });

    this.handleSendMessage = this.onSendMessage.bind(this); 
  }

  handleJoin(name) { 
    const messages = this.state.messages.slice();
    messages.push({action: 'join', name: name});
    this.setState({
      messages: messages
    });
  }

  handlePart(name) { 
    const messages = this.state.messages.slice();
    messages.push({action: 'part', name: name});
    this.setState({
      messages: messages
    });
  }

  handleMessage(name, message) { 
    const messages = this.state.messages.slice();
    messages.push({action: 'message', name: name, message: message});
    this.setState({
      messages: messages
    });
    this.props.onReceivedMessage(message);
  }

  componentDidMount() { 
    fetch(`${pusherConfig.restServer}/users/${this.props.name}`, {
      method: 'PUT'
    });
  }

  componentWillUnmount() { 
    fetch(`${pusherConfig.restServer}/users/${this.props.name}`, {
      method: 'DELETE'
    });
  }

  onSendMessage(text) { 
    text = text.replace(/(\r\n\t|\n|\r\t)/gm,"");     //rimuove a capo o tab dal messaggio (per esempio se inviato con enter)
    const payload = {
        message: text
    };
    console.log(JSON.stringify(payload));
    fetch(`${pusherConfig.restServer}/users/${this.props.name}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

  }

  render() { 
    const messages = this.state.messages;

    return (
      <View style = {styles.chatSection}> 
        <Chat messages={ messages } onSendMessage={ this.handleSendMessage } />
      </View>
);
  }
}


const styles = StyleSheet.create({
  chatSection: {
    alignItems: 'center',
    width: widthChat,
    height: Platform.OS === 'ios' ? heightDevice : heightDeviceAndroid,
    //backgroundColor: 'rgb(162,199,255)',
  },
});