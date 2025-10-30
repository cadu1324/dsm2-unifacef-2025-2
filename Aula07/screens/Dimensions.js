import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default function Dimensoes() {
  return (
    <View style={styles.container}>
      <View style={[styles.banner, { width: width * 0.9, height: height * 0.25 }]}>
        <Text style={styles.text}>Largura: {Math.round(width)} px</Text>
        <Text style={styles.text}>Altura: {Math.round(height)} px</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  banner: { backgroundColor: '#e6f7ff', borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  text: { fontWeight: '600' },
});