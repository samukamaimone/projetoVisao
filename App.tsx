import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    // 1. O NavigationContainer envolve toda a navegação do app.
    <NavigationContainer>
      {/* 2. O AppNavigator contém a definição de todas as suas telas (Login, Mood, etc.) */}
      <AppNavigator />
    </NavigationContainer>
  );
}