import Contenedor from "./components/Contenedor";

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <Contenedor limiteHistorias={5}/>
      </div>
    )
  }
}

export default App
