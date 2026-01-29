import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function SettingsScreen() {
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const storedName = await AsyncStorage.getItem('name');
    const storedDark = await AsyncStorage.getItem('darkMode');

    if (storedName) setName(storedName);
    if (storedDark) setDarkMode(storedDark === 'true');
  };

  const saveSettings = async () => {
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('darkMode', darkMode.toString());
    alert('Configuración guardada');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Ajustes</Text>

      <Text style={styles.label}>Nombre del usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <View style={styles.row}>
        <Text style={styles.label}>Modo oscuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.button}>
        <Button title="Guardar configuración" onPress={saveSettings} />
      </View>

      <View style={styles.button}>
        <Button title="Ver perfil" onPress={() => router.push('/profile')} />
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#222',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#FFF',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});
