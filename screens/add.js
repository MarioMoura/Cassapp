
import React,{ useState } from 'react';
import { 
  StyleSheet,
  View,
  Button,
  TextInput,
  Text
} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Add({ navigation }){

  const [title, setTitle] = useState('title');
  const [body, setBody] = useState('body');
  const [date , setDate ] = useState('today');

  const addFunc =  navigation.getParam('addfunc'); 


  return (
    <View style={ globalStyles.container }>
      <Text>Enter Title</Text>
      <TextInput 
        placeholder='Title'
        onChangeText={setTitle}
      />
      <Text>Enter Body</Text>
      <TextInput 
        placeholder='Body'
        onChangeText={setBody}
      />
      <Text>Enter Date</Text>
      <TextInput 
        placeholder='MM/DD/AAAA'
        onChangeText={setDate}
      />
      <Button title="press me" onPress={() => addFunc(title,body,date)}/>
    </View>
  )

}
