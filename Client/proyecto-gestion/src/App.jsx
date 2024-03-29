import { BrowserRouter, Route, Routes } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
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
import Miembro from "./pages/Miembros/Miembro";
import TodosProyectos from "./pages/Proyectos/TodosProyectos";
import UsuarioMiembro from "./pages/UsuarioMiembro/UsuarioMiembro";
import NotFound from "./pages/NotFound/NotFound";
import Politicas from "./pages/Politicas/Politicas";
import PerfilMiembro from "./pages/perfilMiembro/PerfilMiembro";
import Dashboard from "./pages/Dash/Dashboard";
import DashboardEquipos from "./pages/DashEquipos/DashboardEquipos";
import Recuperar from './pages/RecuperarContraseña/Recuperar'
import MiembroRoute from './Routes/MiembroRoute.jsx'
import JefeRoute from "./Routes/JefeRoute.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* General */}
          <Route path='/Profile' element={<Profile />} />  {/* responsive */}  
          <Route path='/Politicas' element={<Politicas />} /> {/* responsive */}  
          <Route path='/*' element={<NotFound />} /> {/* responsive */}
          <Route path='/RecuperarContraseña' element={<Recuperar />} /> {/* responsive */}
          <Route path='/' element={<Home />} /> {/* responsive */}
          <Route path='/Login' element={<Login />} /> {/* responsive */}
          <Route path='/Register' element={<Register />} /> {/* responsive  */}

          {/* Miembros */}
          <Route element={<MiembroRoute />}>
            <Route path='/ResourcesAndAssets' component={<ResourcesAndAssets />} />
            <Route path='/SolicitudActivos' component={<SolicitudActivos />} />
            <Route path='/SolicitudRecursos' component={<SolicitudRecursos />} />
            <Route path='/TableroMiembros' component={<TableroMiembros />} />
            <Route path='/Dashboard' component={<Dashboard />} />
            <Route path='/DashboardEquipos' component={<DashboardEquipos />} />
          </Route>

          {/* Jefe */}
          <Route element={<JefeRoute />}>
            <Route path='/TodosEquipos' component={<TodosEquipos />}  />
            <Route path='/NuevoProyecto' element={<NuevoProyecto />} />
            <Route path='/NuevoEquipo' element={<NuevoEquipo />} />
            <Route path='/PerfilMiembro' element={<PerfilMiembro />} />
            <Route path='/Proyecto' element={<Proyecto />} />
            <Route path='/Equipo' element={<Equipo />} />
            <Route path='/Miembro' element={<Miembro />} />
            <Route path='/TodosProyectos' element={<TodosProyectos />} /> {/* responsive */} 
            <Route path='/UsuarioMiembro' element={<UsuarioMiembro />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
