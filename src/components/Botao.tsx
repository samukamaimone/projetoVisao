import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface BotaoProps extends TouchableOpacityProps {
  title: string;
}

export default function Botao({ title, ...props }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#309',
    padding: 8,
    alignItems: 'center',
    width: '100%',
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});