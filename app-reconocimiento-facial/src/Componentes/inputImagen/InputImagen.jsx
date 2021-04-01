import React, {useState} from 'react';
import './inputImagen.css'

function InputImagen(props) {
    //state del input que el usuario carga con un link
    const [inputUsuario, setInputUsuario] = useState('');

    function manejoClickEscanear(event) {
        props.alEscanear(inputUsuario);
        setInputUsuario('');
        event.preventDefault();
    }

    return (  
        <div className="div-externo-input">
            <form>
                <input 
                    onChange={ (event) => setInputUsuario(event.target.value) }
                    type="text" 
                    placeholder="Ingrese el link de una foto"
                    value={inputUsuario} 
                />
                <button onClick={manejoClickEscanear}>Escanear</button> 
            </form>
        </div>
    ); 
}

export default InputImagen;