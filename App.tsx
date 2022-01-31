import React from "react";
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  BlackOpsOne_400Regular,
} from '@expo-google-fonts/black-ops-one'
import {
  Mulish_400Regular,
  Mulish_600SemiBold,
  Mulish_700Bold
} from '@expo-google-fonts/mulish';
import AppLoading from 'expo-app-loading';
import Home from "./src/screens/Home";
import theme from "./src/styles/theme";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    BlackOpsOne_400Regular,
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}