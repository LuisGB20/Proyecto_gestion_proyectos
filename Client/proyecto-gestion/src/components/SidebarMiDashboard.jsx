
import { Link } from 'react-router-dom'

function SidebarMiDashboard() {
    const cerrarSesion = () => {
        sessionStorage.removeItem('token')
    }
    return (
        <div className='bg-white w-64 h-auto border-2'>
            <ul className='my-10 mx-auto'>
                <li className='mx-auto text-center my-10'><Link to='/Dashboard' className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white'>Mi Dashboard</Link></li>
                <li className='mx-auto text-center my-10'><Link to='/DashboardEquipos' className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white'>Mi equipo</Link></li>
                <li className='mx-auto text-center my-10'><Link to='/TableroMiembros' className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white'>Tablero de miembros</Link></li>
                <li className='mx-auto text-center my-10'><Link to='/ResourcesAndAssets' className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white'>Recursos y activos</Link></li>
                <li className='mx-auto text-center my-10' onClick={cerrarSesion}><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white' to="/">Cerrar sesión</Link></li>
            </ul>
        </div>
    )
}

export default SidebarMiDashboard