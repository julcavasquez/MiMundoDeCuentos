import React, { useContext,useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../utils/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function MiPerfil() {
  const { user, logout } = useContext(AuthContext)!;
  const navigation = useNavigation<any>();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = user?.token
        const userId = user?.id;
        if (!token || !userId) {
          console.log("No hay sesión guardada");
          setLoading(false);
          return;
        }

        const response = await fetch(`https://8cd0d2b390b5.ngrok-free.app/api/usuarios/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Hola x aqui");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Error obteniendo perfil:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.warning}>No hay usuario logueado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Avatar en el centro */}
      <View style={styles.avatarContainer}>
        {userData?.avatar ? (
          <Image
            source={{ uri: userData.avatar }}
            style={styles.avatar}
            // fallback
            onError={(e) => console.log("Error cargando avatar:", e.nativeEvent.error)}
          />
        ) : (
          <ActivityIndicator size="large" color="#6EE7B7" />
        )}
      </View>

      {/* Datos del usuario */}
      <Text style={styles.title}>Mi Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>👤 Usuario</Text>
        <Text style={styles.value}>{userData?.nom_usu}</Text>

        <Text style={styles.label}>📝 Nombre completo</Text>
        <Text style={styles.value}>
          {userData?.nombres} {userData?.apellidos}
        </Text>

        <Text style={styles.label}>📅 Miembro desde</Text>
        <Text style={styles.value}>
          {new Date(userData?.fecha_creacion).toLocaleDateString()}
        </Text>

         {/* Estado */}
        <View style={[styles.field, styles.estadoBox]}>
            <Text style={styles.label}>✅ Estado</Text>
            <Text style={styles.estado}>{userData?.estado ? userData.estado.toUpperCase() : ""}</Text>
        </View>
      </View>

      {/* Botón cerrar sesión */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          logout();
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        }}
      >
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    alignItems: "center", // centra horizontalmente
  },
  avatarContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // círculo perfecto
    borderWidth: 3,
    borderColor: "#6EE7B7",
    backgroundColor: "#eee",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "500",
    color: "#222",
  },
  button: {
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  warning: {
    textAlign: "center",
    fontSize: 18,
    color: "red",
    marginTop: 50,
  },
   field: {
    marginBottom: 12,
  },
  estadoBox: {
    marginTop: 15,
    backgroundColor: "#d1fae5",
    padding: 10,
    borderRadius: 10,
  },
  estado: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});
