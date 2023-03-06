import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ButtonType {
  text: string;
  fn?: () => void;
  style?: {};
  children?: React.ReactNode;
}

export default function Button({text, style, fn, children}: ButtonType) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => fn && fn()}>
      <Text style={styles.text}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#66a6e2',
    width: '38%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '5%',
    borderRadius: 30,
    flexDirection: 'row',
  },
  text: {
    color: '#181825',
    textTransform: 'uppercase',
    fontSize: 16,
  },
});
