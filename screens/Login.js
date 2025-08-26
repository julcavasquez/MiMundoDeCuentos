import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, TextInput, ImageBackground,TouchableOpacity,ScrollView } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Login({navigation}) {
  const [showPin, setShowPin] = useState(true); // 👈 controla visibilidad del pin
    return (
      <ScrollView>
         <ImageBackground
            source={require("../assets/castillo.png")} // <- tu fondo de castillo
            style={styles.background}
            resizeMode="cover"
          >
            <View style={styles.container}>
          {/* Texto Superior */}
          <View style={styles.header}>
            <Text style={styles.title}>Mi Mundo{"\n"}De Cuentos</Text>
          </View>
          {/* Caja Blanca */}
          <View style={styles.card}>
            <Text style={styles.subtitle}>
              ¡Hola, pequeño creador de historias!
            </Text>

            <TextInput
              placeholder="Nombre Usuario"
              style={styles.input}
              placeholderTextColor="#999"
            />
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="PIN 4 Dígitos"
                style={styles.input}
                secureTextEntry={!showPin}
                keyboardType="numeric"
                maxLength={4}
                placeholderTextColor="#999"
              />
              <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setShowPin(!showPin)}
          >
             <MaterialCommunityIcons
            name={showPin ? "eye-off-outline" : "eye-outline"} 
            size={26}
            color="#FF69B4" // Rosa llamativo y amigable
          />
          </TouchableOpacity>
          </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('RegistroUsuario')}>
              <Text style={styles.linkText}>
                ¿No tienes cuenta? <Text style={styles.registerText}>Regístrate</Text>
              </Text>
            </TouchableOpacity>
          </View>
          </View>
          </ImageBackground>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "70%",
  },
  container: {
    justifyContent: "flex-start",
    paddingTop: 70,
    backgroundColor:'rgba(56, 55, 55, 0.58)',
    height: "70%",
  },
  header: {
    marginTop: 30,
    alignItems: "center",
  },
  title: {
    fontFamily: 'Baloo2-Bold',
    fontSize: 35,    
    lineHeight: 30,
    color: "#00D4FF", 
    textAlign: "center",
    textShadowColor: '#ffffffff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
   card: {
    backgroundColor: "#fff",
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6B81", // Rosa
    textAlign: "center",
    marginBottom: 20,
  },
  inputWrapper: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingRight: 30, // 👈 espacio para el ícono
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    color: '#333'
  },
  iconWrapper: {
    position: "absolute",
    right: 10,
    top: "35%",
    transform: [{ translateY: -12 }], // 👈 centra el ícono verticalmente
  },
  icon: {
    fontSize: 18,
  },
  eyeButton: {
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "#FFD700", // Amarillo
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    width: "70%"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0000FF", // Azul fuerte
    textAlign: "center",
  },
  linkText: {
    marginTop: 10,
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  registerText: {
    color: "#007bff", // azul tipo link
    textDecorationLine: "underline",
  },
})
