import { Text, View, StyleSheet, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Button
        title="Fazer Pedido"
        color="#f50aa5"
        accessibilityLabel="Botão para fazer o Pedido"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 'auto',
    borderRdius: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
});
