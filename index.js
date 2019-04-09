//Importar la libreria para crear un componente
import React from "react";
import { View, AppRegistry } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

//Crear el Componente

const App = () => (
  <View>
    <Header headerText={"Albums!"} />
    <AlbumList />
  </View>
);
//Renderizar en el Dispositivo

AppRegistry.registerComponent("albums", () => App);
