import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Inicio from './components/views/Inicio';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router';
import Estudiantes from './components/views/Estudiantes';
import Turnos from './components/views/Turnos';
import Restaurante from './components/views/Restaurante';
import Web from './components/views/service/Web';
import Sistemas from './components/views/service/Sistemas';
import Mantenimiento from './components/views/service/Mantenimiento';
import Optimizacion from './components/views/service/Optimizacion';
import Consultoria from './components/views/service/Consultoria';

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/autogestion-estudiante' element={<Estudiantes/>}/>
        <Route exact path='/autogestion-turnos' element={<Turnos/>}/>
        <Route exact path='/restaurante' element={<Restaurante/>}/>
        <Route exact path='/desarrollo-web' element={<Web/>}/>
        <Route exact path='/desarrollo-sistema' element={<Sistemas/>}/>
        <Route exact path='/mantenimiento' element={<Mantenimiento/>}/>
        <Route exact path='/seo' element={<Optimizacion/>}/>
        <Route exact path='/consultoria' element={<Consultoria/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
