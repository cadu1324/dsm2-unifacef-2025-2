import React, { useCallback } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
const produtos = Array.from({ length: 1000 }).map((_, i) => ({
  id: String(i),
  nome: `Produto ${i}`,
  preco: (Math.random() * 500).toFixed(2),
}));
export default function ListaOtimizada() {
  const renderItem = useCallback(({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco}</Text>
    </View>
  ), []);
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      initialNumToRender={12}
      windowSize={10}
    />
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  nome: {
    fontWeight: 'bold',
  },
  preco: {
    color: 'gray',
  },
});