import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function CompromissosEquipeScreen({ navigation }) {
  const equipe = [
    {
      id: '1',
      nome: 'Carlos Eduardo Silva de Oliveira',
      compromissos: [
        { id: '1', horario: '09h30', descricao: 'Reunião "Daily"' },
        { id: '2', horario: '14h00', descricao: 'Reunião com o cliente Carros & Carros' },
        { id: '3', horario: '16h30', descricao: 'Prazo final projeto X' },
      ],
    },
    {
      id: '2',
      nome: 'Jurema (Chefe)',
      compromissos: [
        { id: '1', horario: '09h30', descricao: 'Reunião "Daily"' },
        { id: '2', horario: '12h00', descricao: 'Almoço com a diretoria' },
        { id: '3', horario: '15h00', descricao: 'Saída viagem' },
      ],
    },
    {
      id: '3',
      nome: 'Aderbal',
      compromissos: [
        { id: '1', horario: '09h30', descricao: 'Reunião "Daily"' },
        { id: '2', horario: '13h30', descricao: 'Visita técnica UNI-FACEF' },
        { id: '3', horario: '16h30', descricao: 'Prazo final Projeto X' },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.navbarText}>Compromissos Equipe</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Carlos Eduardo Silva de Oliveira</Text>
        <Text style={styles.course}>Sistemas de Informação</Text>
        <Text style={styles.course}>(Eu)</Text>

        <ScrollView style={styles.scrollView}>
          {equipe.map((membro) => (
            <View key={membro.id} style={styles.membroContainer}>
              <Text style={styles.membroNome}>{membro.nome}</Text>
              {membro.compromissos.map((compromisso) => (
                <View key={compromisso.id} style={styles.compromissoItem}>
                  <Text style={styles.compromissoText}>
                    {compromisso.horario}: {compromisso.descricao}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  course: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  membroContainer: {
    marginBottom: 25,
  },
  membroNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 10,
    textAlign: 'center'
  },
  compromissoItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    marginLeft: 10,
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