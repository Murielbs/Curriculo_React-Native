import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/muriel.jpeg')} style={styles.image} />
      <Text>Muriel Bezerra da Silva</Text>
      <Text style={styles.text1}>Sobre mim:</Text>
      <Text style={styles.text}>Meu nome é Muriel Bezerra da Silva, tenho 20 anos, moro em Recife-PE e sou estudante de Análise e Desenvolvimento de Sistemas na Faculdade Senac.</Text>
      <Text style={styles.text1}>Formação Acadêmica:</Text>
      <Text style={styles.text}>Faculdade Senac - Cursando - Análise e Desenvolvimento de Sistemas (2024 - 2026)</Text>
      <Text style={styles.text}>Universidade Federal de Pernambuco (UFPE) - Cursando - Licenciatura em Matemática (2024 - 2028)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 30,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f0f0ff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 70,   
  },
  text: {
    marginBottom: 10,
    lineHeight: 20,
    width: '98%'
  },
  text1: {
    marginBottom: 10,
    width: '90%',
    fontWeight: 'bold'
  }
});
