import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function SecondScreen() {
  const { message } = useLocalSearchParams<{ message: string }>();

  const goBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensaje recibido 📩</Text>
      <Text style={styles.message}>{message}</Text>

      <Pressable style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>⬅ Volver</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#00ffcc',
    fontSize: 24,
    marginBottom: 10,
  },
  message: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#00ffcc',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#0a0a0a',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
