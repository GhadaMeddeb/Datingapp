import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TinderSwiper from './components/TinderSwiper';

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={TinderSwiper} />
        {/* Ajoute d'autres écrans si nécessaire */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}