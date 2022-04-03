import React, { Component } from "react";
import data from "../assets/data.json";
import Historia from "./Historia";
import Historial from "./Historial";
import Opciones from "./Opciones";


export class Contenedor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opcionesSeleccionadas: [],
      historiaActual: data[0],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    alert("¡Bienvenido al Juego!")
  }

  handleClick(opcion) {
    this.setState(
      { opcionesSeleccionadas: [...this.state.opcionesSeleccionadas, opcion] },
      () => {
        const historia = this.obtenerSiguienteHistoria(opcion);
        if (historia !== null) {
          this.setState({
            historiaActual: historia,
          });
        } if((this.state.opcionesSeleccionadas.length === this.props.limiteHistorias-1)){
          alert("FIN")
        }        
      }      
    )
 }

  obtenerSiguienteHistoria(opcion) {
    return data.find((d) => d.id === (this.state.opcionesSeleccionadas.length + 1 + opcion.toLowerCase()));
  }

  render() {
    return (
      <div className="layout">
        <Historia historia={this.state.historiaActual.historia} /> 
        <Opciones
          handleClick={this.handleClick}
          opcionA={this.state.historiaActual.opciones.a}
          opcionB={this.state.historiaActual.opciones.b}
        />
        <Historial opcionesSeleccionadas={this.state.opcionesSeleccionadas} />
      </div>
    );
  }
}

export default Contenedor;
