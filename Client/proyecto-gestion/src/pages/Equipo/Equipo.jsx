
import Header from '../../components/header'
import TeamProyecto from '../../Img/team.png'
import EquipoPortada from '../../Img/equipoPortada.jpg'
import Miembro1 from '../../Img/miembro1.jpg'
import RolesEquipo from '../../Img/rolesEquipo.png'
import AsignacionEquipo from '../../Img/asignacion.png'
import SidebarAdmin from '../../components/SidebarAdmin'


function Equipo() {
  return (
    <div className='bg-slate-50'>
            <Header />
            <div className='flex'>
                <SidebarAdmin/>
                <div className='w-full h-full'>
                    <div className='w-full h-full'>
                        <div className='bg-white my-3 w-full h-20 flex justify-between shadow'>
                            <h1 className='text-2xl font-semibold  p-5'>EQUIPO</h1>
                        </div>
                    </div>

                    {/*todo el body  */}

                    <div className='flex'>

                        {/* ladoIzquiero */}
                        <div className='w-1/2'>

                            <div className='flex items-center'>
                                <div className="mb-4 ml-8 mt-4">
                                    <img
                                        src={EquipoPortada}
                                        className="h-120 w-full  object-cover rounded-lg shadow-[0_10px_20px_rgba(39,_245,146,_0.8)]"
                                    />
                                </div>


                            </div>
                            <div className='ml-8 mb-4 mt-4 font-semibold'>Miembros</div>
                            <div className='flex items-center'>
                                <div className='ml-8 mr-4'>
                                    <div className="flex">
                                        <img
                                            src={Miembro1}
                                            alt="Imagen 1"
                                            className="w-32 h-auto object-cover  rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                                        />
                                        <img
                                            src={Miembro1}
                                            alt="Imagen 2"
                                            className="w-32 h-auto object-cover ml-2 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                                        />
                                        <img
                                            src={Miembro1}
                                            alt="Imagen 3"
                                            className="w-32 h-auto object-cover ml-2 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] "
                                        />
                                         <div className='ml-2 relative'>
                                            <img
                                                src={Miembro1}
                                                alt="Imagen 3"
                                                className="h-30 w-32 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-55 bg-black rounded-lg">
                                                <p className="text-white text-center p-2">More</p>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>

                            </div>

                        </div>


                        {/* ladoDerecho */}

                        <div className='w-1/2'>

                            <div className='ml-8 mb-4 mr-12 mt-6 '>
                                <p className="text-lg font-bold">Descripción del Equipo</p>
                                <p className="text-sm text-justify font-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <p className="text-lg font-bold mt-8">Información </p>
                                <ul className='list-none font-light'>
                                    <li>Equipo:</li>
                                    <li>Miembros:</li>
                                    <li>Presupuesto:</li>
                                    <li>Fecha de Inicio:</li>
                                    <li>Administración de Equipo:</li>
                                </ul>
                            </div>

                            <div className=" flex mb-8 p-4  mr-8 ml-8 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.20)]">
                                <div>
                                    <img src={TeamProyecto} className='ml-2' />
                                </div>

                                <div className='flex items-center ml-8 '>Equipo de Computo</div>

                            </div>

                            <div className=" flex mb-8  p-4  mr-8 ml-8 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.20)]">
                                <div>
                                    <img src={RolesEquipo} className='ml-2' />
                                </div>

                                <div className='flex items-center ml-8 '>Roles</div>

                            </div>
                            <div className=" flex mb-8  p-4  mr-8 ml-8 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.20)]">
                                <div>
                                    <img src={AsignacionEquipo} className='ml-2' />
                                </div>

                                <div className='flex items-center ml-8 '>Asignación</div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
  )
}

export default Equipo
