
import React from 'react';
import './App.css';
import ObtenerHistorial from './Components/TableDatos/ObtenerHistorial';  // Importa como exportación por defecto
import HeaderNavBar from './Components/headers/HeaderNavBar'

function App() {
  return (
    <div >
      
      <div className='container'>
      <HeaderNavBar></HeaderNavBar>
        <ObtenerHistorial />
      </div>
        
      
    </div>
  );
}

export default App;