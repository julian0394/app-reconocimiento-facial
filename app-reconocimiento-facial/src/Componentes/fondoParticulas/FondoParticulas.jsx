import React from 'react';
import Particles from 'react-particles-js';
import configParticulas from './configParticulas';
import './FondoParticulas.css';

function FondoParticulas() {
    return (  
        <Particles params={configParticulas} />
    );
}
 
export default FondoParticulas;