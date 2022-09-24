import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
import Login from './componentes/Login.jsx';
import Bienvenido from './componentes/Bienvenido.jsx';
import Terminos from './componentes/Terminos.jsx';
import NuevaCuenta from './componentes/NuevaCuenta';
import Cines from './componentes/Cines';
import Peliculas from './componentes/Peliculas';
import Sinopsis from './componentes/Sinopsis';
import Usuario from './componentes/Usuario';
import Recibo from './componentes/Recibo';
import {Helmet} from "react-helmet";

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "../src/Server/index.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    
    <div className="App">
      <Helmet>
        <script src='./Server/node_modules'></script>
      </Helmet>
       <Router>
        <Routes> 
          <Route path="/" element={<Bienvenido/>}></Route>
          <Route  path="/terminos" element={<Terminos/>}></Route>
          <Route  path='/login' element={<Login/>}></Route>
          <Route  path='/Crear-cuenta' element={<NuevaCuenta/>}></Route>
          <Route  path='/Cines' element={<Cines/>}></Route>
          <Route path='/Peliculas' element={<Peliculas/>}></Route>
          <Route path='/Sinopsis' element={<Sinopsis/>}></Route>
          <Route path='/Usuario' element={<Usuario/>}></Route>
          <Route path='/Recibo' element={<Recibo/>}></Route>
        </Routes>

      </Router>
     
    </div> 
  );
}
 
export default App;
