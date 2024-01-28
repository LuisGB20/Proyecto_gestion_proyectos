import { Link } from 'react-router-dom'

    function SindebarMiembros() {
    return (
        <>
                    <div className='bg-white w-64 h-auto border-2'>
            <ul className='my-10 mx-auto'>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white'>Mi Dashboard</Link></li>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white' >Mi Equipo</Link></li>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white' to="/TableroMiembros">Tablero De Miembros</Link></li>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white'>Recursos Y Activos</Link></li>
                <li className='mx-auto text-center my-10'><Link className='font-medium text-center text-lg italic mx-auto hover:bg-gradient-to-r hover:from-[#1E4C6A]  hover:to-[#1B7FC5] p-4 rounded-lg hover:text-white' to="/">Cerras Sesión</Link></li>
            </ul>
        </div>
        </>
    )
    }

    export default SindebarMiembros
