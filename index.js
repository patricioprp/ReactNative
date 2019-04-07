//Importar la libreria para crear un componente
import React from 'react';
import {Text,AppRegistry} from 'react-native';
import Header from './src/components/Header';

//Crear el Componente

const App = () =>(
       <Header headerText={'Albums!'}/>
   );
//Renderizar en el Dispositivo

AppRegistry.registerComponent('albums',() =>App);