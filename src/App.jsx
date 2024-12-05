import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Inicio from './components/views/Inicio';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router';
import Estudiantes from './components/views/Estudiantes';
import Turnos from './components/views/Turnos';
import Restaurante from './components/views/Restaurante';

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
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
