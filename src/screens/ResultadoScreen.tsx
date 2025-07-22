import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Botao from '../components/Botao';

export default function ResultadoScreen({ route, navigation }: any) {

  const { mood, emoji } = route.params;
  const [reason, setReason] = useState('');

  const getMessage = () => {
    switch (mood) {
      case 'Feliz': return 'Aproveite seu belo dia!';
      case 'Neutro': return 'Dias neutros fazem parte.';
      case 'Triste': return 'Sinto muito... Mas você é forte!';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.message}>{getMessage()}</Text>

      <Input
        placeholder="O que aconteceu em seu dia hoje?"
        value={reason}
        onChangeText={setReason}
        multiline
        style={{ height: 100, textAlignVertical: 'top' }}
      />
      
      <Botao title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    emoji: { fontSize: 70, textAlign: 'center', marginBottom: 20 },
    message: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
});