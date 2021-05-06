import React,{ useState, useEffect } from 'react';
import { 
  StyleSheet,
  View,
  Button,
  FlatList,
  TouchableOpacity, 
  Text
} from 'react-native';
import { globalStyles } from '../styles/global';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAgD-qZhg_O_lRoh-oY4rkm76Q3e3NzDZ8",
  authDomain: "mobile-av1.firebaseapp.com",
  databaseURL: "https://mobile-av1-default-rtdb.firebaseio.com",
  projectId: "mobile-av1",
  storageBucket: "mobile-av1.appspot.com",
  messagingSenderId: "290160740214",
  appId: "1:290160740214:web:d1d4bbcb2368b61cf69c57"
};

firebase.initializeApp(firebaseConfig);

export default function Home({ navigation }){

  const [events, setEvents] = useState([
    { title: 'Loading...', date: 1620029005110, body: 'lorem ipsum', key: '1' },
  ]);

  useEffect(() => {
    firebase
      .database()
      .ref('todos/')
      .once('value', snapshot => {
        console.log(snapshot.val());
        setEvents(snapshot.val().sort((a,b) => a.date - b.date ));
      });
  }, []);
  useEffect(() => {
        setEvents(events.sort((a,b) => a.date - b.date ));
  }, [events]);

  const sendToDB = () =>{
    firebase
      .database()
      .ref('todos/')
      .set(events);
  }

  const addEvent = (title, body, date) =>{
    const newDate = new Date(date).getTime();
    setEvents((prevEvents) => {
      return [
        { title: title,
          body: body,
          date: newDate,
          key: Math.random().toString() },
        ...prevEvents
      ]
    })
  }

  const deleteEvent = (key) => {
    setEvents( events.filter(event => event.key != key));
  }
  const removeOlds = () =>{
    const now = new Date().getTime();
    setEvents( events.filter(event => event.date > now));
  }
  return (
    <View style={ globalStyles.container }>
      <Button title="add event" onPress={() => navigation.navigate('Add',{ addfunc: addEvent })}/>
      <Button title="Atualizar" onPress={() => sendToDB()}/>
      <Button title="Remover Antigos" onPress={() => removeOlds()}/>
      <Text>Eventos:</Text>
      <FlatList
        data={events}
        renderItem={({ item }) => {
          const date = new Date(item.date);
          return (
            <View >
              <TouchableOpacity onPress={() => navigation.navigate('Details',{singleItem: item,
              delFunc: deleteEvent, addFunc: addEvent })}>
                <Text style={ globalStyles.titleText }>{ item.title } { date.toLocaleDateString() }</Text>
              </TouchableOpacity>
              <Button onPress={() => deleteEvent(item.key)}/>
            </View>
          )
        }}
      />
    </View>
  )

}
