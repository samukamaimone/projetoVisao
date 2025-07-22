import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Input from '../components/Input';
import Botao from '../components/Botao';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.includes('@') || password.length < 4) {
      Alert.alert('Erro!', 'Email e/ou senha errados.');
      return;
    }
    
    if (email.toLowerCase() === 'adm@email' && password === '1234') {
      navigation.navigate('MoodScreen');
    } else {
      Alert.alert('Erro!', 'Dados incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Botao title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 15, backgroundColor: '#fff' }
});