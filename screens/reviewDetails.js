
import React, { useState } from 'react';
import { 
  StyleSheet,
  View,
  Button,
  TextInput,
  Text
} from 'react-native';
import { globalStyles } from '../styles/global';

export default function reviewDetails({ navigation }){
  const item = navigation.getParam('singleItem');
  const newdate = new Date(item.date);

  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);
  const [date , setDate ] = useState(newdate.toLocaleDateString());


  const addEvent = navigation.getParam('addFunc');
  const delEvent = navigation.getParam('delFunc');
  const editEvent = () => {
    delEvent(item.key);
    addEvent(title,body,date)
  }

  return (
    <View style={ globalStyles.container }>
      <Text>{ item.title }</Text>
      <Text>{ item.body }</Text>
      <Text>{ date }</Text>

      <Text>------------------------------</Text>

      <Text>Enter Title</Text>
      <TextInput 
        value={title}
        onChangeText={setTitle}
      />
      <Text>Enter Body</Text>
      <TextInput 
        value={body}
        onChangeText={setBody}
      />
      <Text>Enter Date</Text>
      <TextInput 
        value={date}
        onChangeText={setDate}
      />
      <Button title="press me" onPress={editEvent}/>
    </View>
  )
}
