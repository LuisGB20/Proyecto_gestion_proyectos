
import imagenEquipo from '../../../IMG/imageEquipo.png'
import eliminar from '../../../IMG/eliminar.png'
import editar from '../../../IMG/editar.png'

function TarjetasEquipo() {
    return (
        <div className='bg-white'>
            <img src={imagenEquipo} className='rounded-xl w-96 my-3 mx-auto' />
            <div className='my-3 mx-3'>
                <h1 className='text-left text-2xl font-semibold my-3 italic'>Nombre del Equipo</h1>
                <p className='text-left text-lg font-normal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorem eveniet maxime nostrum a assumenda laborum vel harum nesciunt quidem, ea architecto ipsum. Labore quo rerum nam nihil assumenda ab.</p>
            </div>
            <div>
                <button className=' border-2 text-white font-bold py-2 px-4 rounded-lg mx-3 my-3'>
                    <img src={editar} className='w-8 h-8 m-auto' />
                </button>
                <button className='border-2 text-white font-bold py-2 px-4 rounded-lg mx-3 my-3'>
                    <img src={eliminar} className='w-8 h-8 m-auto' />
                </button>
            </div>
        </div>
    )
}

export default TarjetasEquipo