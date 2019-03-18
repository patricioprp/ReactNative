//Importar la libreria para crear un componente
import React from 'react';
import {Text,AppRegistry} from 'react-native';

//Crear el Componente

const App = () =>{
   return(
       <Text>Algo de Texto</Text>
   );
};
//Renderizar en el Dispositivo

AppRegistry.registerComponent('albums',() =>App);