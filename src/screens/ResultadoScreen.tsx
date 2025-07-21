import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Botao from '../components/Botao';

// Removemos a tipagem : ResultadoScreenProps e usamos : any
export default function ResultadoScreen({ route, navigation }: any) {
  // Agora, confiamos que 'route.params' terá 'mood' e 'emoji'.
  // O TypeScript não nos avisará se estiverem faltando.
  const { mood, emoji } = route.params;
  const [reason, setReason] = useState('');

  const getMessage = () => {
    switch (mood) {
      case 'Feliz': return 'Que ótimo que você está se sentindo feliz!';
      case 'Neutro': return 'Um dia neutro também faz parte. Ficará tudo bem!';
      case 'Triste': return 'Sinto muito que esteja triste. Lembre-se que as coisas melhoram.';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.message}>{getMessage()}</Text>

      <Input
        placeholder="Descreva o que aconteceu..."
        value={reason}
        onChangeText={setReason}
        multiline
        style={{ height: 120, textAlignVertical: 'top' }}
      />
      
      <Botao title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
    emoji: { fontSize: 90, textAlign: 'center', marginBottom: 20 },
    message: { fontSize: 20, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
});