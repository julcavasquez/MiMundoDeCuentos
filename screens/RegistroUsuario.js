import React, { useEffect,useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image,ScrollView } from 'react-native';

const RegistroUsuario = ({navigation}) => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [nom_usu, setNom_usu] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
 
  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const res = await fetch('https://8cd0d2b390b5.ngrok-free.app/api/avatars'); // 👉 aquí va tu endpoint
        const data = await res.json();
        setAvatars(data); // debe ser un array [{id, url}, {id, url}, ...]
      } catch (error) {
        console.log("Error cargando avatares:", error);
      }
    };
    fetchAvatars();
  }, []);
  
  const handleRegister = async () => {
    if (!nom_usu || !pin || !confirmPin || !selectedAvatar) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }
    if (pin !== confirmPin) {
      Alert.alert('Error', 'Los PIN no coinciden');
      return;
    }
    if (pin.length !== 4) {
      Alert.alert('Error', 'El PIN debe tener 4 dígitos');
      return;
    }

    try {
      const response = await fetch('https://8cd0d2b390b5.ngrok-free.app/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nombres: nombres,
            apellidos: apellidos,
            nom_usu: nom_usu,        // el valor de tu input nombre
            pin: pin,             // el valor de tu input pin
            avatar: selectedAvatar // aquí va la URL del avatar seleccionado
      }),
      });

      if (response.ok) {
        Alert.alert(
          "Éxito",
          "Usuario registrado correctamente",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("Home"), // 👈 te regresa al Home
            },
          ],
          { cancelable: false }
        );
        setNom_usu('');
        setPin('');
        setConfirmPin('');
      } else {
        console.log(response);
        Alert.alert('Error', 'No se pudo registrar el usuario');
      }
    } catch (error) {
      Alert.alert('Error', 'Error de conexión con el servidor');
      console.log(selectedAvatar);
    }
  };

  const handleSelect = (id) => {
    console.log("Avatar seleccionado:", id);
    setSelectedAvatar(id); // Guarda el id o toda la info
  };

  
  return (
    <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Registro de Usuario</Text>
          <Text style={styles.label}>Nombres:</Text>
          <TextInput
            style={styles.input}
            placeholder="Escriba sus nombres"
            value={nombres}
            onChangeText={setNombres}
          />

          <Text style={styles.label}>Apellidos:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Escriba sus apellidos"
                  value={apellidos}
                  onChangeText={setApellidos}
                />

          <Text style={styles.label}>Nombre de usuario:</Text>
          <TextInput
            style={styles.input}
            placeholder="Escriba su usuario"
            value={nom_usu}
            onChangeText={setNom_usu}
          />

          <Text style={styles.label}>Elige tu Avatar</Text>
          <View style={styles.avatarContainer}>
            {avatars.length > 0 ? (
              avatars.map((a) => (
              <TouchableOpacity
                key={a.url}
                style={[
                  styles.avatarBox,
                  selectedAvatar  === a.url && styles.avatarSelected,
                ]}
                onPress={() => handleSelect(a.url)}
              >
                <Image  source={{ uri: a.url }}  style={styles.avatarImg} />
              </TouchableOpacity>
            )) ) : (
              <Text>Cargando avatares...</Text>
            )}
          </View>
          <Text style={styles.label}>Clave de ingreso:</Text>
          <TextInput
            style={styles.input}
            placeholder="PIN (4 dígitos)"
            value={pin}
            onChangeText={setPin}
            keyboardType="numeric"
            maxLength={4}
            secureTextEntry
          />
          <Text style={styles.label}>Confirmar clave de ingreso:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmar PIN"
            value={confirmPin}
            onChangeText={setConfirmPin}
            keyboardType="numeric"
            maxLength={4}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FAF8',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 20,
    fontFamily: 'Baloo2-Bold', 
    color: '#1E3A8A',
    marginBottom: 10,
    
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatarBox: {
    padding: 1,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 60,
  },
  avatarSelected: {
    borderColor: '#4CAF50',
    backgroundColor: '#E6F9E8',
    borderWidth: 3
  },
  avatarImg: {
    width: 60,
    height: 60,
    resizeMode: "contain",   // mantiene transparencia y proporciones
    backgroundColor: "transparent", 
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Baloo2-Bold',
    fontSize: 24,
  },
});

export default RegistroUsuario;
