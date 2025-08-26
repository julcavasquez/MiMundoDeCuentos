import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, ImageBackground, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login"); // Reemplaza con la pantalla de destino
    }, 2000); // Simula carga de 2 segundos
  }, []);

  return (
    <ImageBackground 
      source={require("../assets/imginicio.webp")} 
      style={styles.background}
    >
    <View style={styles.overlay}>
        <Text style={styles.text}>Bienvenido a {"\n"}Mi Mundo de Cuentos</Text>
    </View>
    <View style={styles.container}>
      <ActivityIndicator size="large" color="red" />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover", // Ajusta la imagen al tamaño de la pantalla
        justifyContent: "center",
      },
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Oscurece un poco la imagen
        padding: 20,
        borderRadius: 10,
        alignSelf: "center",
      },
      text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
      },
    container: {
        justifyContent: "center",
        alignItems: "center"
  },
});

export default LoadingScreen;