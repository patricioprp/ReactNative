//Importar la libreria para crear un componente
import React from "react";
import { View, AppRegistry } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

//Crear el Componente

const App = () => (
  <View style={{flex:1}}>
    <Header headerText={"Albums!"} />
    <AlbumList />
  </View>
);
//Renderizar en el Dispositivo

AppRegistry.registerComponent("albums", () => App);
//siempre que tenga un desplazamiento de vista, debe agrear una propiedad de estilo "flex=1" a su elemento raiz para q el componente se expanda toda el area del dispositivo

