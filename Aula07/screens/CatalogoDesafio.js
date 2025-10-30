import React, { useMemo, useState, useCallback } from 'react';
import { View, Text, SectionList, TextInput, StyleSheet, useWindowDimensions } from 'react-native';
const rawProducts = [
  { id: '1', nome: 'Notebook', preco: '3500.00', categoria: 'Eletrônicos' },
  { id: '2', nome: 'Smartphone', preco: '1800.00', categoria: 'Eletrônicos' },
  { id: '3', nome: 'Camiseta', preco: '59.90', categoria: 'Roupas' },
  { id: '4', nome: 'Calça', preco: '129.90', categoria: 'Roupas' },
  { id: '5', nome: 'TV', preco: '2400.00', categoria: 'Eletrônicos' },
  { id: '6', nome: 'Tênis', preco: '249.90', categoria: 'Calçados' },
  { id: '7', nome: 'Sandália', preco: '89.90', categoria: 'Calçados' },
  { id: '8', nome: 'Jaqueta', preco: '299.90', categoria: 'Roupas' },
  { id: '9', nome: 'Fone', preco: '199.90', categoria: 'Eletrônicos' },
  { id: '10', nome: 'Meia', preco: '9.90', categoria: 'Roupas' },
];
const ProductItem = React.memo(({ item }) => (
  <View style={styles.card}>
    <Text style={styles.nome}>{item.nome}</Text>
    <Text style={styles.preco}>R$ {item.preco}</Text>
  </View>
));
export default function CatalogoDesafio() {
  const { width } = useWindowDimensions();
  const [query, setQuery] = useState('');
  const sections = useMemo(() => {
    const filtered = rawProducts.filter(p => p.nome.toLowerCase().includes(query.toLowerCase()));
    const map = {};
    filtered.forEach(p => {
      map[p.categoria] = map[p.categoria] || [];
      map[p.categoria].push(p);
    });
    return Object.keys(map).map(title => ({ title, data: map[title] }));
  }, [query]);
  const renderItem = useCallback(({ item }) => <ProductItem item={item} />, []);
  const renderSectionHeader = useCallback(({ section: { title } }) => <Text style={styles.header}>{title}</Text>, []);
  return (
    <View style={[styles.container, { padding: width * 0.03 }]}>
      <TextInput
        placeholder="Filtrar por nome..."
        value={query}
        onChangeText={setQuery}
        style={[styles.input, { width: '100%' }]}
      />
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        initialNumToRender={8}
        windowSize={10}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginVertical: 10 },
  header: { fontSize: 18, backgroundColor: '#eee', padding: 8, fontWeight: 'bold' },
  card: { backgroundColor: '#f8f9fa', marginVertical: 6, padding: 12, borderRadius: 10 },
  nome: { fontWeight: 'bold' },
  preco: { color: 'gray' },
});