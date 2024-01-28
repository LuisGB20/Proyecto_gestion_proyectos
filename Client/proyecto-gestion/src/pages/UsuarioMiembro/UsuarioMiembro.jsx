
import Header from '../../components/header'
import SidebarMiDashboard from '../../components/SidebarMiDashboard'
import UsuarioMensaje from './components/UsuarioMensaje'

    function UsuarioMiembro() {
    return (
        <>
                <div className='w-full h-full bg-slate-200'>
            <Header />
            <div className='w-full h-full flex'>
                <SidebarMiDashboard />
                <div className='w-full h-full'>
                    <div className='bg-white my-3 w-full h-20'>
                        <h1 className='text-2xl font-semibold italic p-5'>Miembros</h1>
                    </div>
                    <div className='w-11/12 h-full rounded-2xl bg-white mx-auto'>
                        <div className='w-full h-[515px] m-5 overflow-auto'>
                            <UsuarioMensaje/>
                            <UsuarioMensaje/>
                            <UsuarioMensaje/>
                            <UsuarioMensaje/>
                            <UsuarioMensaje/>
                            <UsuarioMensaje/>
                            </div>
                            
                    </div>
                    <button className=' font-medium text-center text-lg italic bg-gradient-to-r from-[#1E4C6A]  to-[#1B7FC5] w-96 p-2 ml-44 my-5 rounded-lg text-white'>Siguiente</button> 
                </div>
            </div>
        </div>
        </>
    )
    }

    export default UsuarioMiembro
