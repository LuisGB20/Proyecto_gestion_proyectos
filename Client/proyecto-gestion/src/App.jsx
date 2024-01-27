import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home/Home'
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import ResourcesAndAssets from "./pages/Resources and Assets/Resources and assets";
import SolicitudActivos from "./pages/SolicitudActivos/SolicitudActivos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/ResourcesAndAssets' element={<ResourcesAndAssets/>}/>
          <Route path='/SolicitudActivos' element={<SolicitudActivos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
