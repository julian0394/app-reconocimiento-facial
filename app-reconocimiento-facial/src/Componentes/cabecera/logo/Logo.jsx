import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

function Logo() {
    return ( 
        <Tilt className="Tilt" options={{ max : 35 }} style={{ height: 150, width: 150, transition: true }} >
            <div className="Tilt-inner"> 
                <img src={brain} alt="icono de un cerebro"/> 
            </div>
        </Tilt>
    );
}
 
export default Logo;