import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { GiftedChat } from 'react-native-gifted-chat';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZPtUHen5wc3NiRPiGEI-MNYqiuM-XUwU",
    authDomain: "chat-f9f30.firebaseapp.com",
    projectId: "chat-f9f30",
    storageBucket: "chat-f9f30.appspot.com",
    messagingSenderId: "193285911133",
    appId: "1:193285911133:web:e61b92653840381b9793b4"
  };
  
  // Initialize Firebase
  if(firebase.apps.length === 0){
    const app = firebase.initializeApp(firebaseConfig);
  }
  
  const db = firebase.firestore()
  const chatsRef = db.collection('chats')

const support=()=>{
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])
  
  
    useEffect(() => {
      readUser()
      const unsubscribe = chatsRef.onSnapshot(querySnapshot => {
        const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added' )
                .map(({doc}) => {
                  const message = doc.data()
                  return {...message, createdAt: message.createdAt.toDate()}
                }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          appendMessages(messagesFirestore)
      })
      return () => unsubscribe()
    }, [])
  
    const appendMessages = useCallback((messages) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    }, [messages])
  
    async function readUser() {
      const user = await AsyncStorage.getItem('user')
      if(user) {
        setUser(JSON.parse(user))
      }
    }
  
    async function handlePress() {
      const _id = Math.random().toString(36).substring(7)
      const user = {_id, name}
      await AsyncStorage.setItem('user', JSON.stringify(user))
      setUser(user)
    }
  
    async function handleSend (messages: any[]){
      const writes = messages.map((m: firebase.firestore.DocumentData) => chatsRef.add(m))
      await Promise.all(writes)
    }

    return(
        <GiftedChat  messages={messages} user={user} onSend={handleSend}/>
    )
}
export default  support