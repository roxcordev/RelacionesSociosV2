import * as React from 'react';
import './App.css';
import '../styles/bootstrap.css';
import { IDynamoProps } from "./IDynamoProps";

import { escape } from '@microsoft/sp-lodash-subset';
import 'office-ui-fabric-react/dist/css/fabric.css';

import NavBar from './navbar/navbar';
import Header from './header/header';
import Content from './contenidoPrincipal/contenidoP';
import { Idatos } from './models/Idatos'

//
export default class Dynamo extends React.Component<IDynamoProps, {}> {

  itemsDatos:Idatos[]=[
    {name:'Información del proyecto',key:'infoProject'},
    {name:'Documentación',key:'doc'}
  ]

    
    public render(): React.ReactElement<IDynamoProps> { 
      return (
              <div>
                <div className="navbar navbar-light bg-light"><Header tituloGeneral="Titulo principal"/></div>

                <div className="list-group float-sm-left"> <NavBar titulos={this.itemsDatos} /></div>
                <div> <Content contenido="aqui tabla"/></div> 
                                  
              </div>      
  
      );
    }
  }
  