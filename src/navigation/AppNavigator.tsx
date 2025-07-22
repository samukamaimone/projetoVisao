import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import MoodScreen from '../screens/MoodScreen';
import ResultadoScreen from '../screens/ResultadoScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{ title: 'Login' }} 
      />
      <Stack.Screen 
        name="MoodScreen" 
        component={MoodScreen} 
        options={{ title: 'Qual o sentimento de hoje?' }} 
      />
      <Stack.Screen 
        name="ResultadoScreen" 
        component={ResultadoScreen} 
        options={{ title: 'Meu Humor' }} 
      />
    </Stack.Navigator>
  );
}