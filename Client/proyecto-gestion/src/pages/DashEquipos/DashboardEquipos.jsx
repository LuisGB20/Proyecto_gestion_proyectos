import Header from "../../components/header";
import SidebarMiDashboard from "../../components/SidebarMiDashboard";
import Rol from "./components/RolEquipos";
import Tareas from "./components/TareasContadorEquipos";
import ListaTareas from "./components/ListaTareasEquipos";

function DashboardEquipos() {
  return (
    <>
      <div className="h-full bg-slate-200">
        <Header />
        <div className="flex flex-col sm:flex-row h-[88.6%]">
          <SidebarMiDashboard />
          <div className="w-full">
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
    </>
  );
}
export default DashboardEquipos;