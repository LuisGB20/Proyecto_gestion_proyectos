import Header from '../../components/header';
import SidebarAdmin from '../../components/SidebarAdmin';
import TarjetasProyecto from './components/TarjetasProyecto';

function TodosProyectos() {
  return (
    <>
      <div className='w-full h-full bg-slate-200'>
        <Header area={"Dashboard administrador"} />
        <div className='flex flex-col sm:flex-row'>
          <SidebarAdmin />
          <div className='w-full h-full'>
            <div className='w-full h-full'>
              <div className='bg-white my-3 w-full h-20 flex flex-col sm:flex-row justify-between items-center'>
                <h1 className='text-2xl font-semibold italic p-5'>Proyectos</h1>
                <button className='font-medium text-center text-lg italic bg-gradient-to-r from-[#1E4C6A]  to-[#1B7FC5] p-2 mx-5 my-3 rounded-lg text-white  sm:inline-block'>Crear Nuevo Proyecto</button>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 overflow-auto h-[623px]'>
              <TarjetasProyecto />
              <TarjetasProyecto />
              <TarjetasProyecto />
              <TarjetasProyecto />
              <TarjetasProyecto />
              <TarjetasProyecto />
            </div>
            <button className='font-medium text-center text-lg italic bg-gradient-to-r from-[#1E4C6A]  to-[#1B7FC5] p-2 mx-5 my-5 rounded-lg text-white'>Siguiente</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodosProyectos;
