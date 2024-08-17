import React from 'react';
import './App.css';
import ObtenerHistorial from './Components/TableDatos/ObtenerHistorial';  // Importa como exportación por defecto
import NavBar2 from './Components/headers/NavBar2';

function App() {
  return (
    <div className="app-container">
      <NavBar2 />
      <div className="content-container">
        <ObtenerHistorial />
      </div>
    </div>
  );
}

export default App;
