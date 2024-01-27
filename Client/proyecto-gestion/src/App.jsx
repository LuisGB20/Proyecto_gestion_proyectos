import './App.css'
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import SolicitudActivos from './pages/SolicitudActivos';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SolicitudActivos' element={<SolicitudActivos/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
