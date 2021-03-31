// import logo from './logo.svg';
import './App.css';
import Cabecera from './Componentes/cabecera/Cabecera';
// import Logo from './Componentes/cabecera/logo/Logo';
import Usuario from './Componentes/usuario/Usuario';
import InputImagen from './Componentes/input imagen/InputImagen';
import Reconocimiento from './Componentes/reconocimiento/Reconocimiento';

function App() {
  return (
    <div className="App">
      <Cabecera  />
      {/* <Logo /> */}
      <Usuario />
      <InputImagen />
      <Reconocimiento />
    </div>
  );
}

export default App;
