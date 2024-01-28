import perfil from '../../../IMG/perfil.png'
import rectangulo from "../../../Img/Rectangle41348.png"
    function PerfilMensaje() {
    return (
        <>
        <div className='w-full h-full bg-slate-200'>
        <div className='  w-11/12 mx-auto rounded-lg flex my-3'>
            <img src={perfil} className=' h-96 w-96 ml-52 mt-16  rounded-full' />
            <h1 className=' text-2xl ml-96 mt-10 font-semibold italic '>Información</h1>
            <p className='text-center ml-[-130px] mt-20 font-sans italic my-auto'>Nombre:</p>
            <p className='text-center ml-[-60px] mt-28  font-sans italic my-auto'>Equipo:</p>
            <p className='text-center ml-[-50px] mt-36 font-sans italic my-auto'>Rol:</p>
            <p className='text-center ml-[-27px] mt-44 font-sans italic my-auto'>Inicio De Operaciones:</p>
            <div className=' absolute  '>
            <p className='text-center ml-[1200px] mt-20 font-semibold italic my-auto'>Misael Rosado</p>
            <p className='text-center   ml-[1200px] mt-2  font-semibold italic my-auto'>Spotifal</p>
            <p className='text-center ml-[1200px] mt-2  font-semibold italic my-auto'>Analista</p>
            <p className='text-center ml-[1200px] mt-2  font-semibold italic my-auto'>10-Diciembre-2022</p>
            </div>
            <div className=' absolute mt-96 ml-[-85px] '>
                <h1 className='ml-28 mt-44 font-sans italic my-auto '>Ultimas Tareas completadas</h1>
                <div className='border-2 w-[700px] bg-white ml-24 mx-auto rounded-lg flex my-3 '>
                    <img src={rectangulo} className='ml-16 w-28 h-28 m-auto '/>
                    <p className='text-center text-md  mx-auto font-semibold italic my-auto '>Pruebas Y Validacion En El Software: Smilebook</p>
                </div>
                <div className='border-2 w-[700px] bg-white ml-24 mx-auto rounded-lg flex my-3 '>
                    <img src={rectangulo} className=' ml-16 w-28 h-28 m-auto '/>
                    <p className='text-center text-md  mx-auto font-semibold italic my-auto '>Documentacion Del Proyecto: AllSlow</p>
                </div>
                <div className='border-2 w-[700px] bg-white ml-24 mx-auto rounded-lg flex my-3 '>
                    <img src={rectangulo} className=' ml-16 w-28  h-28 m-auto '/>
                    <p className='text-center text-md  mx-auto font-semibold italic my-auto '>Identificacion En El Problema De Seguridad En La Aplicacion Movil: Chat JPT</p>
                </div>  
            </div>
            <div className=' absolute mt-96 ml-[700px] '>
                <h1 className='ml-28 mt-44 font-sans italic my-auto '>Proyectos Anteriores</h1>
                <div className='border-2 w-[700px] bg-white ml-24 mx-auto rounded-lg flex my-3 '>
                    <img src={rectangulo} className='ml-16 w-28 h-28 m-auto '/>
                    <p className='text-center text-md  mx-auto font-semibold italic my-auto '> Smilebook</p>
                </div>
                <div className='border-2 w-[700px] bg-white ml-24 mx-auto rounded-lg flex my-3 '>
                    <img src={rectangulo} className=' ml-16 w-28 h-28 m-auto '/>
                    <p className='text-center text-md  mx-auto font-semibold italic my-auto '> AllSlow</p>
                </div>
                <div className='border-2 w-[700px] bg-white ml-24 mx-auto rounded-lg flex my-3 '>
                    <img src={rectangulo} className=' ml-16 w-28  h-28 m-auto '/>
                    <p className='text-center text-md  mx-auto font-semibold italic my-auto '> Chat JPT</p>
                </div> 
            </div>
        </div>
        </div>
        </>
    )
    }

    export default PerfilMensaje
