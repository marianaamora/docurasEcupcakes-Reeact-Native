import { Text, SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Morango from './components/morango';
import Chocolate from './components/chocolate.js';
import Branco from './components/branco.js';
import Red from './components/red.js';
import Canela from './components/canela.js';
import Leite from './components/leite.js';
import Botao from './components/botao.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>
          Doçuras e Cupcakes
        </Text>
        <Text style={styles.paragraph}>
          Sabores
        </Text>
        <View style={styles.bloco}>
          <Morango />
          <Chocolate />
        </View>
        <View style={styles.bloco}>
          <Branco />
          <Red />
        </View>
        <View style={styles.bloco}>
          <Canela />
          <Leite />
        </View>
        <View>
          <Botao />
        </View>
        <Text style={styles.nome}>
          Mariana Amora (3°C)
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8d1f4',
    padding: 8,
  },
   titulo: {
    marginTop: 35,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f50aa5',
  },

  paragraph: {
    marginBottom: 24,
    fontSize: 25,
    padding: 4,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f50aa5',
    color: '#f8d1f4',
    marginLeft: -10,
    marginRight: -10,
  },

  bloco: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  nome: {
    color: '#f50aa5',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  }
});
