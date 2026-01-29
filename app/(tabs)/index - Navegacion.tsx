import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function App() {
  const [text, setText] = useState('');

  const goToSecondScreen = () => {
    router.push({
      pathname: '/second',
      params: { message: text },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escribe un mensaje 👇</Text>

      <TextInput
        style={styles.input}
        placeholder="Mensaje"
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />

      <Pressable style={styles.button} onPress={goToSecondScreen}>
        <Text style={styles.buttonText}>Ir a la segunda pantalla</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#00ffcc',
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00ffcc',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00ffcc',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0a0a0a',
  },
});
