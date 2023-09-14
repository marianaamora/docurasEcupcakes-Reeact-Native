import { Text, View, StyleSheet, Image } from 'react-native';

export default function Canela() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Canela
      </Text>
      <Image style={styles.logo} source={require('../assets/canela.jfif')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 0,
    backgroundColor: '#6e22cf',
    borderRadius: 20,
    width: '45%',
    height: 170,
    marginTop: 24,
  },
  paragraph: {
    marginBottom: 16.5,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f8d1f4',
  },
  logo: {
    height: 100,
    width: 135,
    borderRadius: 15,
  }
});
