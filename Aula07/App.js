import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ListaOtimizada from './screens/ListaOtimizada';
import ListaAgrupada from './screens/ListaAgrupada';
import Dimensoes from './screens/Dimensoes';
import CatalogoDesafio from './screens/CatalogoDesafio';
export default function App() {
  const [screen, setScreen] = useState('catalog');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setScreen('catalog')} style={styles.btn}>
          <Text style={styles.btnText}>Catálogo (Desafio)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('lista')} style={styles.btn}>
          <Text style={styles.btnText}>Lista Otimizada</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('sections')} style={styles.btn}>
          <Text style={styles.btnText}>Lista Agrupada</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('dimensoes')} style={styles.btn}>
          <Text style={styles.btnText}>Dimensões</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        {screen === 'lista' && <ListaOtimizada />}
        {screen === 'sections' && <ListaAgrupada />}
        {screen === 'dimensoes' && <Dimensoes />}
        {screen === 'catalog' && <CatalogoDesafio />}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  menu: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: '#f2f2f2' },
  btn: { paddingHorizontal: 10, paddingVertical: 6, backgroundColor: '#007AFF', borderRadius: 6 },
  btnText: { color: '#fff', fontWeight: '600' },
  screen: { flex: 1, padding: 12 },
});