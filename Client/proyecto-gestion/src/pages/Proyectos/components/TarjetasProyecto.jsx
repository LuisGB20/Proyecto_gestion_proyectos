import instagram from '../../../IMG/instagram.png';
import eliminar from '../../../IMG/eliminar.png';
import editar from '../../../IMG/editar.png';

function TarjetasProyecto() {
  return (
    <>
      <div className='bg-white'>
        <img src={instagram} className='rounded-xl w-full md:w-96 my-3 mx-auto' />
        <div className='my-3 mx-3'>
          <h1 className='text-left text-2xl font-semibold my-3 italic'>Nombre del Proyecto</h1>
          <p className='text-left text-lg font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorem eveniet maxime nostrum a assumenda laborum vel harum nesciunt quidem, ea architecto ipsum. Labore quo rerum nam nihil assumenda ab.
          </p>
        </div>
        <div>
          <button className='border-2 text-white font-bold py-2 px-4 rounded-lg mx-3 my-3'>
            <img src={editar} className='w-8 h-8 m-auto' alt='Editar' />
          </button>
          <button className='border-2 text-white font-bold py-2 px-4 rounded-lg mx-3 my-3'>
            <img src={eliminar} className='w-8 h-8 m-auto' alt='Eliminar' />
          </button>
        </div>
      </div>
    </>
  );
}

export default TarjetasProyecto;
