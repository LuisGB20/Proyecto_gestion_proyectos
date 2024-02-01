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
import ProtectedRoutes from './Routes/ProtectedRoutes.jsx'
import ProtectedRoutesJefe from "./Routes/ProtectedRoutesJefe.jsx";
import { useState, useEffect } from "react";

function App() {
  const [isRoleValid, setRoleValid] = useState(false);
  const [isJefe, setIsJefe] = useState(false);
  const [rol, setRol] = useState('');
  const [tokenDecoded, setTokenDecoded] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      console.log(decodedToken.roles);

      if (decodedToken.roles === 'Programador' || decodedToken.roles === 'Analista' || decodedToken.roles === 'Diseñador') {
        setRoleValid(true);
        setRol(decodedToken.roles);
      }
      if (decodedToken.roles === 'Jefe') {
        setIsJefe(true);
        setRol(decodedToken.roles);
      }

      setTokenDecoded(true);
    } else {
      console.log("No hay token");
    }
  }, []);

  console.log("isRoleValid:", isRoleValid);
  console.log("isJefe:", isJefe);
  console.log("tokenDecoded:", tokenDecoded);


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
          <Route element={<ProtectedRoutes canActivate={rol} redirectPath='/' />}>
            <Route path='/ResourcesAndAssets' element={<ResourcesAndAssets />} /> {/* responsive */}
            <Route path='/SolicitudActivos' element={<SolicitudActivos />} /> {/* responsive */}
            <Route path='/SolicitudRecursos' element={<SolicitudRecursos />} /> {/* responsive */}
            <Route path='/TableroMiembros' element={<TableroMiembros />} /> {/* responsive */}
            <Route path='/Dashboard' element={<Dashboard />} />  {/* responsive */}  
            <Route path='/DashboardEquipos' element={<DashboardEquipos />} /> {/* responsive */}  
          </Route>

          {/* Jefe */}
          <Route element={<ProtectedRoutesJefe canActivate={rol} redirectPath='/Login' />}>
            <Route path='/TodosEquipos' element={<TodosEquipos />} /> {/* responsive */} 
            <Route path='/NuevoProyecto' element={<NuevoProyecto />} /> {/* responsive */} 
            <Route path='/NuevoEquipo' element={<NuevoEquipo />} /> {/* responsive */} 
            <Route path='/PerfilMiembro' element={<PerfilMiembro />} /> {/* responsive */} 
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
