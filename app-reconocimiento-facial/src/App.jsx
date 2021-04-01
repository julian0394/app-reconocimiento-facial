import React, {useState} from 'react';
import './App.css';
import Cabecera from './Componentes/cabecera/Cabecera';
import Usuario from './Componentes/usuario/Usuario';
import InputImagen from './Componentes/inputImagen/InputImagen';
import Reconocimiento from './Componentes/reconocimiento/Reconocimiento';
import FondoParticulas from './Componentes/fondoParticulas/FondoParticulas';

function App() {
    //state del link pasado por el usuario desde #InputImagen
    const [link, setLink] = useState('');

    function manejoCambioInput(nuevoLink) {
        setLink(nuevoLink);
        // console.log('clickeado', nuevoLink);
    }

    return (
        <div className="App">
            <h1>{link}</h1>
            <Cabecera  />
            <Usuario />
            <InputImagen alEscanear={manejoCambioInput} />
            {/* <Reconocimiento data={link} /> */}
            <div className="div-fondo-particulas">
                <FondoParticulas />
            </div>
        </div>
    );
}

export default App;
