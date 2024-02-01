// TodosEquipos.jsx


import Header from '../../components/header';
import SidebarAdmin from '../../components/SidebarAdmin';
import TarjetasEquipo from './components/TarjetasEquipo';

function TodosEquipos() {
  return (
    <div className='w-full h-full bg-slate-200'>
      <Header area={'Dashboard administrador'} />
      <div className='flex'>
        <SidebarAdmin />
        <div className='w-full h-full'>
          <div className='w-full h-full'>
            <div className='bg-white my-3 w-full h-20 flex justify-between items-center'>
              <h1 className='text-2xl font-semibold italic p-5'>Equipos</h1>
              <button className='font-medium text-center text-lg italic bg-gradient-to-r from-[#1E4C6A]  to-[#1B7FC5] p-2 mx-5 my-3 rounded-lg text-white'>
                Agregar nuevo equipo
              </button>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 overflow-auto h-[623px]'>
            <TarjetasEquipo />
            <TarjetasEquipo />
            <TarjetasEquipo />
            <TarjetasEquipo />
            <TarjetasEquipo />
            <TarjetasEquipo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosEquipos;
