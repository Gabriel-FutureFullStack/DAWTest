
import React from 'react';
import './App.css';
import ObtenerHistorial from './Components/TableDatos/ObtenerHistorial';  // Importa como exportación por defecto
//import HeaderNavBar from './Components/headers/HeaderNavBar'
import NavBar2 from './Components/headers/NavBar2';

function App() {
  return (
    <div >
      
      <div className='container'>
      <NavBar2/>
        <ObtenerHistorial />
      </div>
        
      
    </div>
  );
}

export default App;