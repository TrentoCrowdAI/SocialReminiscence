import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import InvertibleScrollView  from 'react-native-invertible-scroll-view';


const window = Dimensions.get('window'); 
const widthDevice = window.width; 
const widthChat= (widthDevice * (5/7) - 20);


export default class Message extends Component<Props>{
    constructor(props) {
        super(props);
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
        } else if ((action == 'message') && (name == 'Chatbot')) {
            return (
            <View style = { styles.messagesChatBot }>
                <Image source={require('../Icon/chatbot.png')} style={styles.imageProfile} />
                <View style= {[styles.messageContainer, {backgroundColor : 'rgb(87, 162, 249)', borderBottomLeftRadius: 0}]}>
                    <Text style={ [styles.messageText, {color: 'white'}] }>{ item.message }</Text>
                </View>
            </View>
            );
        } else if ((action == 'message') && (name != 'Chatbot')) {
            return (
            <View style = { styles.messagesUser }>
                <View style= {[styles.messageContainer, {backgroundColor : '#eee', borderBottomRightRadius: 0}]}>
                    <Text style={ [styles.messageText, {color: 'black'}]}>{ item.message }</Text>
                </View>
                <Image source={require('../Icon/user.png')} style={styles.imageProfile} />
            </View>
            );
        }
    }


    render(){
        return (
            <View style={{flex:1, borderTopColor: 'lightgrey', borderTopWidth: 2 }}>    
                <InvertibleScrollView 
                    style={{marginTop:10, marginLeft: 60, marginRight: 160 }} 
                    inverted 
                    >
                    <FlatList data={ this.props.messages } 
                        renderItem={ this.renderItem }
                        styles={ styles.messages } 
                        ref="messages" 
                        keyExtractor = { (item, index) => index.toString() }
                    />
                </InvertibleScrollView>
            </View>
        );
    }



}


const styles = StyleSheet.create({
    messages: {
        flex: 1,
        //alignSelf: 'stretch',
        //width: widthChat,
        margin:5,
        marginLeft: 10,
        //backgroundColor: 'blue',
        justifyContent: 'flex-end',
    },

    messagesChatBot: {
        //width: widthChat,
        margin: 8,
        flexDirection : 'row', 
        //marginLeft: 60,
    },

    messagesUser: {
        justifyContent: 'flex-end',
        //marginRight: 80,
        //width: widthChat,
        margin: 8,
        flexDirection : 'row', 
    },

    messageContainer: {
        maxWidth: 500,
        // backgroundColor: 'rgb(87, 162, 249)',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 16,

    },

    imageProfile: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },

    messageText: {
        fontSize : 18,
        margin: 10,
        marginLeft:15,
        marginRight: 15,
        fontFamily: 'Georgia'
    },

    joinPart: {
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: 'bold',
    }
});