import React from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import { DataProvicer } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";

function App() {
  return (
    <DataProvicer> 
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Paginas />
      </Router>
    </div>
    </DataProvicer>
  );
}

export default App;
