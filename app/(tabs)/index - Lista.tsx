import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escribe tu nombre 👇</Text>

      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.result}>
        Hola {name || '👋'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#00ffcc',
    fontSize: 22,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#00ffcc',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  result: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
