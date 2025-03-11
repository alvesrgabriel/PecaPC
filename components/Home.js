import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Home(props) {
  return (
        <SafeAreaView style={estilo.container}>
            <View style={estilo.principal}>
                <Text style={estilo.titulo}>Partes do Computador</Text>
                <Text style={estilo.subtitulo}>As partes mais importantes do PC.</Text>
            </View>

            <View>
                <TouchableOpacity style={estilo.button} onPress={()=>{props.navigation.navigate('Placa_mae')}}>
                <Text style={estilo.textButton}>Placa-Mãe</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilo.button} onPress={()=>{props.navigation.navigate('Placa_video')}}>
                <Text style={estilo.textButton}>Placa de Video</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30
  },
  subTitulo: {
    fontSize: 15,
  },
  button: {
    margin: 10,
    padding: 5,
    backgroundColor: '#add8e6',
    borderRadius: 5,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
  },
  principal: {
    alignItems: 'center',
    marginBottom: 50,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#4f5a'
  }

});