import React, { Component } from 'react'

export class Historial extends Component {
  render() {
      
    return (
      <div className='opciones'>
          <h3>Selección anterior: {this.props.opcionesSeleccionadas[this.props.opcionesSeleccionadas.length-1]}  </h3>
          <h4>Historial de opciones elegidas: </h4>
          <ul>{this.props.opcionesSeleccionadas.map((el,i)=><li key={i}>{el}</li>)}</ul>
      </div>
    )
  }
}

export default Historial