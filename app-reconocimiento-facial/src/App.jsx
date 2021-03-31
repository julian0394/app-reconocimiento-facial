// import logo from './logo.svg';
import './App.css';

import Cabecera from './Componentes/cabecera/Cabecera';
// import Logo from './Componentes/cabecera/logo/Logo';
import Usuario from './Componentes/usuario/Usuario';
import InputImagen from './Componentes/inputImagen/InputImagen';
import Reconocimiento from './Componentes/reconocimiento/Reconocimiento';
import FondoParticulas from './Componentes/fondoParticulas/FondoParticulas';

function App() {
  return (
    <div className="App">
        <Cabecera  />
        <Usuario />
        <InputImagen />
        {/* <Reconocimiento /> */}
        <div className="div-fondo-particulas">
            <FondoParticulas />
        </div>
    </div>
  );
}

export default App;
