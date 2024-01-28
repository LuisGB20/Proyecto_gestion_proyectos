
import { Link } from 'react-router-dom'

function SidebarAdmin() {
    return (
        <div className='bg-white w-72 h-auto border-2'>
            <ul className='my-10 mx-auto'>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white'>Dashboard administrador</Link></li>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white' to="/TodosProyectos">Proyectos</Link></li>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white' to="/TodosEquipos">Equipos</Link></li>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white' to="/UsuarioMiembro">Miembros</Link></li>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white'>Cerrar Sesión</Link></li>
            </ul>
        </div>
    )
}

export default SidebarAdmin