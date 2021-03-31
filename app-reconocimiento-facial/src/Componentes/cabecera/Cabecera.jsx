import React from 'react';
import './Cabecera.css'
import Logo from './logo/Logo';

function Caberera() {
    return ( 
        <div className="div-cabecera">
            <Logo />
            <h1>Super sistema de detección de rostros!</h1>
            <a href="">Cerrar sesión</a>
        </div>
    );
}
 
export default Caberera;
