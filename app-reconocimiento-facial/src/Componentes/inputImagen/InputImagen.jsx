import React from 'react';
import './inputImagen.css'

function InputImagen() {
    return (  
        <div className="div-externo-input">
            <form>
                <input type="text" placeholder="Ingrese el link de una foto" /> {/* size="40" */}
                <button>Escanear</button>
            </form>
        </div>
    ); 
}

export default InputImagen;