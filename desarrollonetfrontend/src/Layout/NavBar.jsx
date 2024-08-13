import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <NavLink to="/" className='btn btn-outline-primary' exact>
                    Inicio
                </NavLink>
                <NavLink to="/obtenerHistorial" className='btn btn-outline-primary'>
                    Historial
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;