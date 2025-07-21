import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import MoodScreen from '../screens/MoodScreen';
import ResultadoScreen from '../screens/ResultadoScreen';

// Removemos a tipagem <RootStackParamList> daqui.
// O navegador agora funciona de forma mais genérica.
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
        options={{ title: 'Como você está?' }} 
      />
      <Stack.Screen 
        name="ResultadoScreen" 
        component={ResultadoScreen} 
        options={{ title: 'Seu Humor' }} 
      />
    </Stack.Navigator>
  );
}