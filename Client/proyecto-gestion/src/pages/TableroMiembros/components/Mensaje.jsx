import rectangulo from '../../../IMG/Rectangle413481.png';

function Mensaje() {
    return (
        <div className='border-2 w-11/12 mx-auto rounded-lg flex flex-col sm:flex-row my-3'>
            <img src={rectangulo} className='w-1/6 h-28 m-auto sm:m-0 sm:mr-3' />
            <p className='text-center text-md w-full sm:w-1/6 mx-auto font-semibold italic my-auto  sm:mr-3'>Luis Gomez:</p>
            <p className='text-center text-md w-full sm:w-4/6 mx-auto font-semibold italic my-auto '>Buenos dias a todos</p>
        </div>
    );
}

export default Mensaje;