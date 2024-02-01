import rectangulo from '../../../IMG/Rectangle41348.png';

function TarjetasActivas() {
  return (
    <>
      <div className='border-2 w-11/12 mx-auto rounded-lg flex flex-col sm:flex-row my-3'>
        <img src={rectangulo} className='w-1/4 h-28 m-auto sm:m-0 sm:mr-3'/>
        <p className='text-center text-md w-full sm:w-1/4 mx-auto font-semibold italic my-auto sm:my-0 sm:mr-3'>Equipo De Trabajo</p>
        <div className='w-full sm:w-1/4 my-auto mx-auto'>
          <div className='w-full bg-blue-500 h-2 rounded-full mx-auto'></div>
          <h2 className='text-center text-md mx-auto font-semibold italic my-auto sm:my-0'>Disponibilidad</h2>
        </div>
      </div>
    </>
  );
}

export default TarjetasActivas;