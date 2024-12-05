import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Inicio from './components/views/Inicio';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router';
import Estudiantes from './components/views/Estudiantes';

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='autogestion-estudiante' element={<Estudiantes/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
