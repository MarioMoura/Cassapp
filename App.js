import React,{ useState } from 'react';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import Navigator from './routes/homeStack'


export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Navigator />
  );
}
