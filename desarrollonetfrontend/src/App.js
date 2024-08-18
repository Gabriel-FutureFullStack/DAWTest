import React from 'react';
import './App.css';
import ObtenerHistorial2 from './Components/TableDatos/ObtenerHistorial2';  
import NavBar2 from './Components/headers/NavBar2';
import ObtenerHistorial from './Components/TableDatos/ObtenerHistorial';  


function App() {
  return (
    <div className="app-container">
      <NavBar2 />
      <br/>
      <br/>
      <div className="content-container">
        <ObtenerHistorial/>
        <ObtenerHistorial2/>
      </div>
    </div>
  );
}

export default App;
