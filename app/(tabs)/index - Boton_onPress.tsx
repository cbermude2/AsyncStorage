import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('Hello World 🌎');

  const handlePress = () => {
    setMessage('¡Botón presionado! 🚀');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Presióname</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#00ffcc',
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#00ffcc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#0a0a0a',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
