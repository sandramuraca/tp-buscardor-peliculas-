import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Nav from './componentes/Nav';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
import UltimosLanzamientos from './componentes/UltimosLanzamientos';
import Populares from './componentes/Populares';
import Buscador from './componentes/Buscardor';

// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return (
  

      <BrowserRouter>
        <Nav/>
      

          <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />} 
          />
          <Route path="/populares" element={<Populares />} 
          />
          <Route path="/buscar" element={<Buscador />} 
          />
          
          <Route path="/detalle-pelicula/:idPelicula" element={<Buscador />} 
          />

        </Routes>
         
       <Footer/>

      </BrowserRouter>


  )
}

export default App;
