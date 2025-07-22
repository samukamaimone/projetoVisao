import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';


export default function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 4,
    backgroundColor: '#fff',
  },
});