import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useEffect, useState } from 'react';

export default function SecondScreen() {
  const { message } = useLocalSearchParams<{ message?: string }>();
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (message) {
      setMessages(prev => [...prev, message]);
    }
  }, [message]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de mensajes 📋</Text>

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item}</Text>
        )}
      />

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>⬅ Volver</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  title: {
    color: '#00ffcc',
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  item: {
    color: '#f4f80c',
    fontSize: 18,
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#00ffcc',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#0a0a0a',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
