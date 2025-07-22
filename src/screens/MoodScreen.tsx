import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Botao';

export default function MoodScreen({ navigation }: any) {
  
  const selectMood = (mood: string, emoji: string) => {
    navigation.navigate('ResultadoScreen', { mood, emoji });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como você está se sentindo hoje?</Text>
      
      <Botao title="😄 Feliz" onPress={() => selectMood('Feliz', '😄')} />
      <Botao title="😐 Neutro" onPress={() => selectMood('Neutro', '😐')} />
      <Botao title="😢 Triste" onPress={() => selectMood('Triste', '😢')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 30, textAlign: 'center', marginBottom: 10 }
});