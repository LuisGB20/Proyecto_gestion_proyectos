import React from 'react'
import Header from '../../components/header'
import SiderbarProfile from '../../components/SidebarProfile'
import Anadir from '../../Img/anadir.png'
import UsuarioAgregado from '../../Img/usuarioagregado.png'
import EliminarUsuario from '../../Img/eliminarUsuario.png'

function NuevoEquipo() {
    return (
        <div className='bg-slate-50'>
            <Header />
            <div className='flex'>
                <SiderbarProfile />
                <div className='w-full h-full'>
                    <div className='w-full h-full'>
                        <div className='bg-white my-3 w-full h-20 flex justify-between shadow'>
                            <h1 className='text-2xl font-semibold  p-5'>NUEVO EQUIPO</h1>
                        </div>


                        <div className="w-full flex items-center ">
                            <form className="bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded px-10 pt-8 pb-12 md:w-96 lg:w-2/3  ml-12 mt-4 mb-8 ">
                                <div className="mb-4 ">
                                    <label className="block text-gray-500 text-sm font-bold mb-2" for="username">
                                        Nombre
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Agrega un Nombre al Equipo" />
                                </div>
                                <div className="mb-4 ">
                                    <label className="block text-gray-500 text-sm font-bold mb-2" for="text">
                                        Descripción
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Describe información General sobre el Equipo" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2" for="text">
                                        Asignar un Proyecto
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="team" type="text" placeholder="¿Qué proyecto va a realizar?" />
                                </div>
                                <div className='mb-4'>
                                    <label className="block text-gray-500 text-sm font-bold mb-2" for="text">
                                        Asignar Miembros
                                    </label>
                                </div>
                                <div className="mb-12 flex items-center">
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="team" type="text" placeholder="Agrega a las personas que formaran parte del Equipo" />
                                    <img className='ml-4' src={Anadir} />
                                </div>



                                <div className=" flex mb-8 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div>
                                        <img className='ml-2' src={UsuarioAgregado} />
                                    </div>

                                    <div className='flex items-center ml-8 '>Nombre: <div className='font-light ml-2'> Pedro Pablo</div></div>
                                    <div className='flex items-center ml-8 '>Rol: <div className='font-light ml-2'> Analista</div></div>
                                    <div className='ml-auto'>
                                        <img src={EliminarUsuario} />
                                    </div>

                                </div>

                            </form>

                        </div>



                        <div className=' my-3 w-full h-20 flex justify-between items-center'>

                            <button className='font-medium text-center text-lg bg-gradient-to-r from-[#1E4C6A]  to-[#1B7FC5] p-2 mx-5 my-3 rounded-lg text-white ml-auto mr-12'>Crear Equipo</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default NuevoEquipo
