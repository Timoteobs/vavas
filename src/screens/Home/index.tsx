import React from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Title,
  Header,
  Image,
} from './styles';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Agents from '../Agents';
import Weapons from '../Weapons';
const Tab = createMaterialTopTabNavigator();

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Image source={require('../../assets/header.png')} />
      </Header>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FF4654",
          tabBarPressColor: "#0F1923",
          tabBarStyle: { backgroundColor: "#0F1923", marginHorizontal: 20 },
          tabBarLabelStyle: { fontSize: 15, fontFamily: 'Mulish_700Bold' },
          tabBarIndicatorStyle: {backgroundColor: "#FF4654", height: 4}
        }}
      >
        <Tab.Screen
          name="Agentes"
          component={Agents}
        />
        <Tab.Screen
          name="Armas"
          component={Weapons}
        />
      </Tab.Navigator>
    </Container>
  );
}

export default Home;