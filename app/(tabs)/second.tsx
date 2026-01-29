import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function SecondScreen() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const stored = await AsyncStorage.getItem('items');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista guardada</Text>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item}</Text>
        )}
      />

      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});
