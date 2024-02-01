
import Header from "../../components/header";
import SidebarMiDashboard from "../../components/SidebarMiDashboard";
import Rol from "./components/Rol";
import Tareas from "./components/TareasContador";
import ListaTareas from "./components/ListaTareas";

function Dashboard() {
  return (
    <div className='h-full bg-slate-200'>
      <Header />
      <div className="flex flex-col lg:flex-row">
        <SidebarMiDashboard />
        <div>
          <div>
            <Rol />
          </div>
          <div>
            <Tareas />
          </div>
          <div>
            <ListaTareas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
