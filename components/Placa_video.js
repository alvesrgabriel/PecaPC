import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Placa_video() {
  return (
    <View style={styles.container}>
      <Text>Placa-vídeo</Text>
        <Image style={styles.img} source={require('../assets/download.jpg')}/>
        <Text>A placa de vídeo (ou placa gráfica) é responsável por processar e gerar imagens que são exibidas no monitor. Ela possui um processador gráfico (GPU) dedicado, melhorando o desempenho em tarefas gráficas, como jogos e edição de vídeo.</Text>
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