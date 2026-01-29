import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function IndexScreen() {
  const [text, setText] = useState('');

  const saveItem = async () => {
    if (!text.trim()) return;

    // 1. Leer lista actual
    const stored = await AsyncStorage.getItem('items');
    const items = stored ? JSON.parse(stored) : [];

    // 2. Agregar nuevo elemento
    items.push(text);

    // 3. Guardar lista actualizada
    await AsyncStorage.setItem('items', JSON.stringify(items));

    // 4. Limpiar input y navegar
    setText('');
    router.push('/second');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini-lista persistente</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />

      <Button title="Guardar y ver lista" onPress={saveItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    padding: 10,
    marginBottom: 20,
  },
});
