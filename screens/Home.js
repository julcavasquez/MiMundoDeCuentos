import React from 'react'
import { ScrollView,Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Home() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.TextTop}> 
              Tu Nueva Aventura esta por empezar....
            </Text>
            <View>
              <TouchableOpacity style={styles.button} onPress={() => alert('¡Botón presionado!')}>
                <Ionicons name="caret-forward-outline" size={20} color="#fff" style={styles.icon} />
                <Text style={styles.text}>COMENZAR</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tarjeta}>
            <Text> 
              MIS CUENTOS
            </Text>
            <View style={styles.cajatexto}>
                <TextInput placeholder='correoe@gmail.com' style={{paddingHorizontal:15}} />
            </View>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
          <View style={styles.boxWithShadow}>
                <Text style={styles.textbox}>Caja con sombra</Text>
          </View>
        </View>
      </ScrollView>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    position: 'relative',
    backgroundColor:'#5257f2'
  },
  top: {
    justifyContent: 'flex-end', // Coloca los elementos en la parte inferior
    backgroundColor:'red',
    padding: 20,
    height: 200
  },
  TextTop: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    borderRadius:20,
    paddingVertical:20,
    width:140,
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
  icon: {
    marginLeft: 10,  // Espacio entre el ícono y el texto
  },
  boxWithShadow: {
    backgroundColor: '#4caf50', // Fondo verde
    padding: 20,                // Relleno dentro de la caja
    borderRadius: 10,           // Bordes redondeados
    shadowColor: '#000',        // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.8,         // Opacidad de la sombra
    shadowRadius: 5,            // Difusión de la sombra
    elevation: 5, 
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15              // Para Android (efecto de sombra)
  },
  textbox: {
    color: '#fff',              // Texto blanco
    fontSize: 18,
  },
})
