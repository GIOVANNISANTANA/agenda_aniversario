import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View, ImageBackground } from 'react-native';

import image from '../../assets/aniversario.png';
//const topo = { uri: "https://reactjs.org/logo-og.png" };
//const width = Dimensions.get('screen').width;

export default function Home(){
  return (<View style={estilos.container}>
    <ImageBackground source={image} style={estilos.image} >
      <Text style={estilos.texto}>Lembrete de aniversario !</Text>
    </ImageBackground>
    
  </View>
)}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#ff0088",
    marginTop: 25,
  },
  image:{
    height: "75%",
    alignItems: "center",
    
  },
  texto:{
    textAlign: "center",
    marginTop: 80,
  },
  view:{
    //flex: 1,
  }
});


