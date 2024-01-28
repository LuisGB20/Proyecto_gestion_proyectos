import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home/Home'
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import ResourcesAndAssets from "./pages/Resources and Assets/Resources and assets";
import SolicitudActivos from "./pages/SolicitudActivos/SolicitudActivos";
import SolicitudRecursos from "./pages/SolicitudRecursos/SolicitudRecursos";
import TableroMiembros from "./pages/TableroMiembros/TableroMiembros";
import TodosEquipos from "./pages/equipos/TodosEquipos";
import Miembro from "./pages/Miembros/Miembro";
import TodosProyectos from "./pages/Proyectos/TodosProyectos";


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
          <Route path='/Miembro' element={<Miembro />} />
          <Route path='/TodosProyectos' element={<TodosProyectos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
