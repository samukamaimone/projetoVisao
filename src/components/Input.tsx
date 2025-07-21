import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

// O Input.tsx recebe todas as propriedades de um TextInput normal
// o que o torna flexível e reutilizável.
export default function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props} // Passa todas as props recebidas para o TextInput
      style={[styles.input, props.style]} // Combina o estilo padrão com estilos personalizados
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});