import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DailyPicScreen from './Screens/DailyPicScreen';
import HomeScreen from './Screens/HomeScreen';
import SpaceCraftsScreen from './Screens/SpaceCraftsScreen';
import StarMapScreen from './Screens/StarMapScreen';

const Stack = createStackNavigator();
function MyStack() {
  return (    
     <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
     <Stack.Screen name = "HomeScreen" component = { HomeScreen }/>
     <Stack.Screen name = "SpaceCraftsScreen" component = { SpaceCraftsScreen }/>
     <Stack.Screen name = "StarMapScreen" component = { StarMapScreen }/>
     <Stack.Screen name = "DailyPicScreen" component = { DailyPicScreen }/>
     </Stack.Navigator>    
  );
}

export default MyStack;