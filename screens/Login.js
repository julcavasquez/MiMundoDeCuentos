import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'

export default function Login() {
    return (
      <View style={styles.padre}>
        <View>
          <Image source={require('../assets/profile.png')} style={styles.profile}/>
        </View>
        <View style={styles.tarjeta}>
            <View style={styles.cajatexto}>
              <TextInput placeholder='correoe@gmail.com' style={{paddingHorizontal:15}} />
            </View>

            <View style={styles.cajatexto}>
              <TextInput placeholder='Password' style={{paddingHorizontal:15}} />
            </View>

            <View style={styles.PadreBoton}>
              <TouchableOpacity style={styles.cajaBoton}>
                <Text style={styles.TextoBoton}>Ingresar</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
      padre:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
      },
      profile:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'white'
      },
      tarjeta:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:'90%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
          width:0,
          height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
      },
      cajatexto:{
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:30,
        marginVertical:10
      },
      PadreBoton:{
        alignItems:'center'
      },
      cajaBoton:{
        backgroundColor:'#525FE1',
        borderRadius:38,
        paddingVertical:20,
        width:150,
        marginTop:20
      },
      TextoBoton:{
        textAlign:'center',
        color:'white'
      }
})
