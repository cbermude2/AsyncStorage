import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function DemoPersistencia() {
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);

  // 🔹 Cargar datos guardados al iniciar
  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const storedName = await AsyncStorage.getItem('name');
      const storedDark = await AsyncStorage.getItem('darkMode');
      const storedNotif = await AsyncStorage.getItem('notifications');

      if (storedName) setName(storedName);
      if (storedDark) setDarkMode(storedDark === 'true');
      if (storedNotif) setNotifications(storedNotif === 'true');
    } catch (error) {
      console.log('Error al cargar configuración', error);
    }
  };

  // 🔹 Guardar datos
  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('darkMode', darkMode.toString());
      await AsyncStorage.setItem('notifications', notifications.toString());
      alert('Configuración guardada');
    } catch (error) {
      console.log('Error al guardar configuración', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración básica</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del usuario"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#888"
      />

      <View style={styles.row}>
        <Text style={styles.label}>Modo oscuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Notificaciones</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      <Button title="Guardar configuración" onPress={saveSettings} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    color: '#000',
    padding: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
  },
});
