import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';

const Section = ({title, children}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

export default function App() {
  const openEmail = () => Linking.openURL('mailto:Bezerramuriel8@gmail.com');
  const openPhone = () => Linking.openURL('tel:+558199931959394');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/muriel.jpeg')} style={styles.image} />
          <View style={styles.nameBlock}>
            <Text style={styles.name}>Muriel Bezerra da Silva</Text>
            <Text style={styles.role}>Estudante de ADS • Educadora de Robótica</Text>
            <View style={styles.contactRow}>
              <TouchableOpacity onPress={openEmail}>
                <Text style={styles.contact}>Bezerramuriel8@gmail.com</Text>
              </TouchableOpacity>
              <Text style={styles.bullet}>•</Text>
              <TouchableOpacity onPress={openPhone}>
                <Text style={styles.contact}>Recife, PE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Section title="Sobre mim">
          <Text style={styles.text}>
            Meu nome é Muriel Bezerra da Silva, tenho 20 anos, moro em Recife-PE e
            estudo Análise e Desenvolvimento de Sistemas no Senac. Tenho
            experiência com educação em robótica, atividades práticas com
            crianças e adolescentes, e interesse em desenvolvimento mobile.
          </Text>
        </Section>

        <Section title="Experiência">
          <Text style={styles.itemTitle}>Educadora de Robótica Educacional</Text>
          <Text style={styles.itemMeta}>Divertec Educacional / Instituto Shopping Recife / Colégio Solar da Criança • 2024 - atual</Text>
          <Text style={styles.text}>Ministro oficinas de robótica e programação básica, preparo material didático e adapto atividades para diferentes faixas etárias.</Text>

          <Text style={[styles.itemTitle, {marginTop: 10}]}>Projetos relevantes</Text>
          <Text style={styles.text}>Participação na organização de feiras de ciências locais e apresentações pedagógicas para famílias.</Text>
        </Section>

        <Section title="Formação">
          <Text style={styles.itemTitle}>Faculdade Senac</Text>
          <Text style={styles.itemMeta}>Análise e Desenvolvimento de Sistemas • 2024 - 2026 (cursando)</Text>

          <Text style={[styles.itemTitle, {marginTop: 10}]}>UFPE</Text>
          <Text style={styles.itemMeta}>Licenciatura em Matemática • 2024 - 2028 (cursando)</Text>
        </Section>

        <Section title="Linguagens de Programação">
          <View style={styles.skillsRow}>
            <View style={styles.skillPill}><Text style={styles.skillText}>JavaScript</Text></View>
            <View style={styles.skillPill}><Text style={styles.skillText}>TypeScript</Text></View>
            <View style={styles.skillPill}><Text style={styles.skillText}>Python</Text></View>
            <View style={styles.skillPill}><Text style={styles.skillText}>React</Text></View>
          </View>
        </Section>

        <Section title="Idiomas">
          <Text style={styles.text}>Português — Nativo</Text>
          <Text style={styles.text}>Inglês — Intermediário (estudando)</Text>
        </Section>

        <Section title="Contato">
          <Text style={styles.text}>Email: Bezerramuriel8@gmail.com</Text>
          <Text style={styles.text}>Telefone: (81) 9931959394</Text>
          <Text style={styles.text}>LinkedIn: https://www.linkedin.com/in/muriel-bezerra-690a432a9/</Text>
        </Section>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {flex: 1, backgroundColor: '#f7f7fb'},
  container: {
    padding: 20,
    alignItems: 'stretch',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 16,
    marginRight: 0,
    marginBottom: 12,
    backgroundColor: '#ddd',
    
  },
  nameBlock: {
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0b451aff',
  },
  role: {
    color: '#425b7a',
    marginTop: 4,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    justifyContent: 'center',
  },
  contact: {color: '#079009ff', marginRight: 8},
  bullet: {color: '#666', marginHorizontal: 6},
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: '700',
    marginBottom: 8,
    color: '#030804ff'
  },
  sectionContent: {},
  text: {
    color: '#333',
    lineHeight: 20,
    marginBottom: 6,
  },
  itemTitle: {fontWeight: '600', color: '#070a07ff'},
  itemMeta: {color: '#6b7180', fontSize: 12, marginBottom: 6},
  skillsRow: {flexDirection: 'row', flexWrap: 'wrap'},
  skillPill: {
    backgroundColor: '#e6f0ff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {color: '#0b942bff', fontWeight: '600'},
});
