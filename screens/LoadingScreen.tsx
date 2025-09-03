import React, { useEffect, useContext } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { AuthContext } from "../utils/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function LoadingPag() {
  const { user, loading } = useContext(AuthContext)!;
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (!loading) {
      if (user) {
        console.log("DEBUG - Usuario logueado:", user);
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else {
        console.log("DEBUG - No hay sesión activa");
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      }
    }
  }, [loading]); // 👈 Solo depende de "loading"

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
