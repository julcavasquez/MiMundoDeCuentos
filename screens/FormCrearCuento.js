import React, { useEffect, useState } from 'react'
import { ScrollView,Title,
  Text, StyleSheet, View, 
   ImageBackground,
   Image, TextInput, 
   ActivityIndicator,TouchableOpacity } from 'react-native'
import axios from 'axios'
import { Picker } from '@react-native-picker/picker';


const FormCrearCuento = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipoCreacion, setTipoCreacion] = useState(true); // true = creado por IA
  const [usuario, setUsuarios] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');

  //
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const res = await axios.get('https://f364-190-233-206-83.ngrok-free.app/api/usuarios/1'); // en emulador Android
        setUsuarios(res.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerUsuarios();
  }, []);

   const onGuardar = (datos) => {
    // Aquí puedes hacer el POST al backend o navegar
    console.log('Guardar cuento:', datos);
    navigation.goBack(); // opcional
  };

/*   const handleSubmit = () => {
    if (!titulo.trim() || !descripcion.trim()) {
      Alert.alert('Campos requeridos', 'Por favor completa todos los campos.');
      return;
    }

    const nuevoCuento = {
      titulo,
      descripcion,
      tipo_creacion: tipoCreacion,
      idusu_creador: 1, // 👈 temporal, deberías reemplazar con el usuario logueado
    };

    console.log('Datos del cuento:', nuevoCuento);

    if (onGuardar) onGuardar(nuevoCuento);

    // Limpiar formulario
    setTitulo('');
    setDescripcion('');
    setTipoCreacion(true);
  }; */

/*    if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={styles.loader} />;
  } */

  return (
   
        <ImageBackground
      source={require("../assets/imginicio.webp")}  // fondo lúdico opcional
      style={styles.fondo}
      >
         <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Título del Cuento:</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe un titulo mágico"
            value={nombre}
            onChangeText={setNombre}
          />
          <Text style={styles.resultado}>Hola, {nombre || '...'}</Text>
          <View style={styles.card}>
              <Image
                source={{ uri: 'https://i.imgur.com/IU1dtLI.png' }}
                style={styles.imagen}
              />
              <View style={styles.contenido}>
                  <Text style={styles.titulo}>Personaje Principal</Text>
                  <Text style={styles.label}>Nombre:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Escribe nombre del personaje"
                    value={nombre}
                    onChangeText={setNombre}
                  />
                  <Text style={styles.label}>Tipo de Personaje:</Text>
                  <View style={styles.selectWrapper}>
                    <Picker
                      selectedValue={genero}
                      onValueChange={(itemValue) => setGenero(itemValue)}
                      style={styles.picker}
                      dropdownIconColor="#ff69b4"
                    >
                      <Picker.Item label="Selecciona..." value="" />
                      <Picker.Item label="Niño" value="aventura" />
                      <Picker.Item label="Niña" value="fantasia" />
                      <Picker.Item label="Animal" value="animales" />
                      <Picker.Item label="Robot" value="espacial" />
                      <Picker.Item label="Héroe Mágico" value="espacial" />
                    </Picker>
                  </View>
                  <Text style={styles.label}>Descripción:</Text>
                  <TextInput
                    multiline
                    numberOfLines={6}
                    maxLength={10}
                    style={styles.textArea}
                    textAlignVertical="top"
                    placeholder="Describe brevemente a tu personaje"
                    value={nombre}
                    onChangeText={setNombre}
                  />
                  {genero ? (
                    <Text style={styles.resultado}>✨ Elegiste: {genero}</Text>
                  ) : null}
                  <TouchableOpacity style={styles.boton}>
                    <Text style={styles.textoBoton}>📖 Leer cuento</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <Text style={styles.label}>Estilo Narrativo:</Text>
          <View style={styles.selectWrapper}>
                <Picker
                      selectedValue={genero}
                      onValueChange={(itemValue) => setGenero(itemValue)}
                      style={styles.picker}
                      dropdownIconColor="#ff69b4"
                >
                <Picker.Item label="Selecciona..." value="" />
                <Picker.Item label="Niño" value="aventura" />
                <Picker.Item label="Niña" value="fantasia" />
                <Picker.Item label="Animal" value="animales" />
                <Picker.Item label="Robot" value="espacial" />
                <Picker.Item label="Héroe Mágico" value="espacial" />
                </Picker>
                </View>
          <Text style={styles.resultado}>Hola, {nombre || '...'}</Text>
          <Text style={styles.label}>Ambientación:</Text>
          <TextInput
            style={styles.input}
            placeholder="Lugar donde se desarrolla la historia"
            value={nombre}
            onChangeText={setNombre}
          />
          <Text style={styles.resultado}>Hola, {nombre || '...'}</Text>
    </View>
    </ScrollView>
     </ImageBackground>
  );
};

export default FormCrearCuento;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffffcc',
    padding: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ff7eb3',
    margin: 15
  },
  fondo: {
    flex: 1,
    resizeMode: "cover", // Ajusta la imagen al tamaño de la pantalla
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: 10,
    textShadowColor: '#ffc0cb',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  input: {
    backgroundColor: '#f0f8ff',
    borderColor: '#00bcd4',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    shadowColor: '#00bcd4',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    color: '#333'
  },
  loader: { flex: 1, justifyContent: 'center' },
  card: {
    backgroundColor: '#fff8fd',
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#ff91ca',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  contenido: {
    padding: 10
  },
   titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: 10
  },
  selectWrapper: {
    borderWidth: 2,
    borderColor: '#ff91ca',
    borderRadius: 12,
    backgroundColor: '#fff'
  },

   picker: {
    height: 50,
    color: '#333',
    paddingHorizontal: 10
  },

   textArea: {
    height: 140,
    backgroundColor: '#fff',
    borderColor: '#ff91ca',
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlignVertical: 'top',
    ...Platform.select({
      ios: {
        paddingTop: 15
      }
    })
  }
  
 
});
