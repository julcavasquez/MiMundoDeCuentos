import React,{useState} from 'react';
import { ScrollView, Text, StyleSheet, View, Image, TextInput, Modal,
  TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({ navigation }) {
    const [menuVisible, setMenuVisible] = useState(false);
     return (
    //Inicio del ScrollView 
      <ScrollView>
        {/* Inicio View General */}       
        <View>
          <ImageBackground 
                  source={require("../assets/imghome.webp")}
          >
            <View style={{backgroundColor:'rgba(56, 55, 55, 0.58)'}}>
                <View style={styles.boxusu}>
                    <TouchableOpacity 
                        activeOpacity={1} // Evita que el botón se opaque al presionarlo
                        style={styles.buttonusu} 
                        onPress={() => setMenuVisible(!menuVisible)}
                    >
                      <Ionicons name="person-circle-outline" size={20} color="#fff" style={styles.iconusu} />
                    </TouchableOpacity>
                     {/* Dropdown como Modal */}
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        {/* Fondo clickeable para cerrar */}
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>

        {/* Dropdown flotante */}
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.optionText}>Ingresar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate("RegistroUsuario");
            }}
          >
            <Text style={styles.optionText}>Registrate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate("Ayuda");
            }}
          >
            <Text style={styles.optionText}>Acerca de</Text>
          </TouchableOpacity>
        </View>
      </Modal>
                </View>
                <View style={{marginBottom:15}}> 
                    <Text style={styles.TextTop }> 
                      Tu Nueva Aventura esta por empezar....
                    </Text>
                </View>
                <View style={{marginBottom:15,marginLeft:10}}>
                    <TouchableOpacity 
                      activeOpacity={1} // Evita que el botón se opaque al presionarlo
                      style={styles.button} 
                      onPress={() => {navigation.navigate("CrearCuento");}}>
                        <Ionicons name="caret-forward-outline" size={20} color="#fff" style={styles.icon} />
                        <Text style={styles.text}>COMENZAR</Text>
                    </TouchableOpacity>
                </View>
            </View>              
          </ImageBackground>
          <View style={{margin:3}}>
              <View style={styles.contentcon}>
                  <View style={styles.TituloBox}>
                      <Text style={styles.titlecon}>Título Genero 1</Text>
                      <Ionicons name="chevron-forward" size={20} color="#fff" style={{marginLeft:2,fontSize:28,color:'black'}} />
                  </View>
                  <ScrollView horizontal 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }} 
                        style={styles.scrollViewscro}>
                      <View style={[styles.boxCuento, { backgroundColor: "#4CAF50" }]}>
                      <View style={{flex: 1,margin:15}}>
                          <View style={{marginBottom:8}}>
                            <Text style={{fontFamily:'Baloo2-Bold',fontSize:16}}>Titulo Cuento</Text>
                          </View>
                          <View style={{height:"70%"}}>
                            <Text style={{fontFamily:'Poppins-Bold',fontSize:13,
                              lineHeight: 15, // Espaciado entre líneas
                            }}>La niebla matutina se ha disipado del del bosque cuando cuando terminas de practicar las formas con la espada de tu hermano. Aún la consideras suya, aunque ha pasado un año desde que lo arrastraron a la </Text>
                          </View>
                          <View style={{flex: 1, 
                                        justifyContent: 'center', 
                                        alignItems: 'flex-end'}}>
                              <TouchableOpacity 
                                activeOpacity={1} // Evita que el botón se opaque al presionarlo
                                style={styles.buttonVer} 
                                onPress={() => alert('¡Botón presionado!')}>
                                  <Ionicons name="eye" size={20} color="#fff" style={{ marginLeft: 10,marginRight:8}} />
                                  <Text style={{ fontFamily: 'Baloo2-Bold',
                                                  color: '#E90101',
                                                  fontSize: 16,marginTop:-3}}>VER</Text>
                              </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.boxCuento, { backgroundColor: "#4CAF50" }]}>
                          <Text style={styles.text}>Item 2</Text>
                      </View>
                      <View style={[styles.boxCuento, { backgroundColor: "#4CAF50" }]}>
                          <Text style={styles.text}>Item 3</Text>
                      </View>
                      <View style={[styles.boxCuento, { backgroundColor: "#4CAF50" }]}>
                          <Text style={styles.text}>Item 4</Text>
                      </View>
                  </ScrollView>
              </View>
              <View style={styles.contentcon}>
                <View style={styles.TituloBox}>
                    <Text style={styles.titlecon}>Título del Contenedor</Text>
                    <Ionicons name="chevron-forward" size={20} color="#fff" style={{marginLeft:2,fontSize:28,color:'black'}} />
                </View>
        <ScrollView horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }} 
          style={styles.scrollViewscro}>
      <View style={[styles.boxCuento, { backgroundColor: "#ff6363" }]}>
        <Text style={styles.text}>Item 1</Text>
      </View>
      <View style={[styles.boxCuento, { backgroundColor: "#ffbd69" }]}>
        <Text style={styles.text}>Item 2</Text>
      </View>
      <View style={[styles.boxCuento, { backgroundColor: "#65d6ce" }]}>
        <Text style={styles.text}>Item 3</Text>
      </View>
      <View style={[styles.boxCuento, { backgroundColor: "#a084cf" }]}>
        <Text style={styles.text}>Item 4</Text>
      </View>
    </ScrollView>
      </View>
          </View>
    <View style={{marginTop:15}}>
      
    </View>
          <View style={{ width: "100%" }}>
  
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
        {/* FIN View General */} 
      </ScrollView>
    //FIN del ScrollView
    )
  
}

const styles = StyleSheet.create({
  containerflex: {    
    
  },
  box: {
    width: '100%', // Ajusta el tamaño de cada ítem (2 por fila) 
    marginBottom: 10,
    borderRadius: 10,
  },
  boxusu: {
    flex: 1, 
    
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    paddingRight: 20 
  },
  dropdown: {
    position: "absolute",
    top: 70, // distancia debajo del botón
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5, // sombra en Android
    width: 180,
    paddingVertical: 5,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  container:{
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '3em',
    backgroundColor:'#EDEDED'
  },
  item:{
    width: '300px',
    height: '300px',
    backgroundColor: 'red'
  },
  backgroundtop: {
    
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Ocupa toda la imagen
    backgroundColor: "rgba(0, 0, 0, 0.32)", // Negro con opacidad 50%
  },
  top: {
    backgroundColor:'red',
    height: 200
  },
  TextTop: {
    fontFamily: 'Baloo2-Bold', 
    fontSize: 32, 
    paddingLeft: 20,
    paddingRight:20,
    lineHeight: 30,
    color: '#00D4FF',    
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFD700',
    borderRadius:20,
    paddingVertical:5,
    width:200,
    height:50,
    marginLeft:15,
    marginTop:10,
    marginBottom:10
  },
  buttonVer: {
    flexDirection: 'row',
    backgroundColor: '#FFD700',
    borderRadius:20,
    paddingVertical:5,
    width:90,
    height:30,
    marginLeft:15,
    marginTop:10,
    marginBottom:10
  },
  text: {
    fontFamily: 'Baloo2-Bold',
    color: '#E90101',
    fontSize: 24,
  },
  icon: {
    marginLeft: 10,  // Espacio entre el ícono y el texto
    fontSize: 40,
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
  // Boton de usuario
  buttonusu: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderRadius:30,
    width:50,
    height:50,
    marginTop:10,
    marginBottom:10,
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  iconusu: {
    fontSize: 40,
  },
  card: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollViewscro: {
    padding: 5,
    marginRight:10
  },
  boxCuento: {
    width: 230,
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginRight: 15,
    marginLeft:-5,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5, // Sombra en Android    
  },
  textscro: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentcon: {
    width: "93%",
    padding: 5,
    marginLeft:15,
    marginTop:10
  },
  titlecon: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 1,
  },
  TituloBox:{
    flexDirection: "row", // Alinea los elementos en fila
    alignItems: "center", // Centra verticalmente el icono y el texto
    padding: 10,
  }
})
