import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Placa_mae() {
  return (
    <View style={styles.container}>
      <Text>Placa-mãe</Text>
        <Image style={styles.img} source={require('../assets/Download1.jpg')}/>
    <Text>A placa-mãe é o componente principal de um computador, responsável por conectar e permitir a comunicação entre todos os outros componentes, como processador, memória e dispositivos de armazenamento. Ela contém slots e portas para periféricos e placas adicionais.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 300,
    width: 300,
  }
});