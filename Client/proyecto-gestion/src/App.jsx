import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home/Home'
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import ResourcesAndAssets from "./pages/Resources and Assets/Resources and assets";
import SolicitudActivos from "./pages/SolicitudActivos/SolicitudActivos";
import SolicitudRecursos from "./pages/SolicitudRecursos/SolicitudRecursos";
import TableroMiembros from "./pages/TableroMiembros/TableroMiembros";
import TodosEquipos from "./pages/equipos/TodosEquipos";
import Profile from "./pages/Profile/Profile"
import NuevoProyecto from "./pages/NuevoProyecto/NuevoProyecto";
import NuevoEquipo from "./pages/NuevoEquipo/NuevoEquipo";
import Proyecto from "./pages/Proyecto/Proyecto"
import Equipo from "./pages/Equipo/Equipo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/ResourcesAndAssets' element={<ResourcesAndAssets />} />
          <Route path='/SolicitudActivos' element={<SolicitudActivos />} />
          <Route path='/SolicitudRecursos' element={<SolicitudRecursos />} />
          <Route path='/TableroMiembros' element={<TableroMiembros />} />
          <Route path='/TodosEquipos' element={<TodosEquipos />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/NuevoProyecto' element={<NuevoProyecto />} />
          <Route path='/NuevoEquipo' element={<NuevoEquipo />} />
          <Route path='/Proyecto' element={<Proyecto />} />
          <Route path='/Equipo' element={<Equipo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
