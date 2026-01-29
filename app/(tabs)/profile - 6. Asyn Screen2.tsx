import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const storedName = await AsyncStorage.getItem('name');
    const storedDark = await AsyncStorage.getItem('darkMode');

    if (storedName) setName(storedName);
    if (storedDark) setDarkMode(storedDark === 'true');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Perfil Usuario</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Nombre:</Text>
        <Text style={styles.value}>{name || 'No definido'}</Text>

        <Text style={styles.text}>Modo oscuro:</Text>
        <Text style={styles.value}>
          {darkMode ? 'Activado 🌙' : 'Desactivado ☀️'}
        </Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>⬅ Volver</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#222',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#222',
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
