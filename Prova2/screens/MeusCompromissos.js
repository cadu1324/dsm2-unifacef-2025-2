import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function MeusCompromissosScreen({ navigation }) {
  const compromissos = [
    { id: '1', horario: '09h30', descricao: 'Reunião "Daily"' },
    { id: '2', horario: '14h00', descricao: 'Reunião com o cliente Carros & Carros' },
    { id: '3', horario: '16h30', descricao: 'Prazo final projeto X' },
  ];

  const renderCompromisso = ({ item }) => (
    <View style={styles.compromissoItem}>
      <Text style={styles.compromissoText}>
        {item.horario}: {item.descricao}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.navbarText}>Meus Compromissos</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>(Eu)</Text>

        <Text style={styles.name}>Carlos Eduardo Silva de Oliveira</Text>
        <Text style={styles.course}>Sistemas de Informação</Text>

        <View style={styles.listaContainer}>
          <FlatList
            data={compromissos}
            renderItem={renderCompromisso}
            keyExtractor={(item) => item.id}
            style={styles.lista}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    backgroundColor: '#4a90e2',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  navbarText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
  course: {
    fontSize: 14,
    color: '#777',
    marginBottom: 30,
    textAlign: 'center',
  },
  listaContainer: {
    flex: 1,
  },
  lista: {
    flex: 1,
  },
  compromissoItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  compromissoText: {
    fontSize: 16,
    color: '#333',
  },
});