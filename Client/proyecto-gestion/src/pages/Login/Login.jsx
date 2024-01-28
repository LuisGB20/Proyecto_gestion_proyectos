
import Logo from '../../IMG/logo.png'
import { Link } from "react-router-dom";

function Login () {
    return (
        <div>
            <div className="bg-slate-200 flex items-center justify-center h-screen">
                <div className="bg-white h-[75%] w-[35%] rounded-xl grid place-content-center shadow-xl">
                    <div className="flex justify-center">
                        <img src={Logo} alt="" className="w-10"/>
                        <p className="text-[#00568D] text-xl">ProManSys</p>
                    </div>
                    <div className="text-center mt-5 mb-5">
                        <p className="text-[#4D4D4D]">Bienvenido a</p>
                        <p className="font-bold text-lg">Sistema De Gestión De Proyectos Empresariales</p>
                        <p className="text-[#4D4D4D] text-sm">Por favor de Iniciar Sesion</p>
                    </div>
                    <div className="grid place-content-center">
                        <form>
                            <h3 className="mb-1">Correo electronido</h3>
                            <input
                                required
                                type="text"
                                placeholder="gomez@gmail.com"
                                className="bg-slate-100 w-80 h-10 rounded-xl pl-5 mb-4"
                            />
                            <h3 className="mb-1">Contraseña</h3>
                            <input
                                required
                                type="password" 
                                placeholder="********"
                                className="bg-slate-100 w-80 h-10 rounded-xl pl-5"
                            />
                        </form>
                        <div>
                            <button className="bg-gradient-to-r from-blue-900 to-blue-500 text-white w-80 h-10 rounded-xl my-3">Iniciar Sesion</button>
                            {/* <p className="text-[#4D4D4D] text-sm text-center">O continuar con</p> */}
                            <p className="text-center">Nuevo Miembro? 
                                <Link to='/Register'>
                                    <span className="text-blue-400 ml-2">Registrate ahora</span>
                                </Link>
                            </p>
                            <h4 className="text-[#00568D] font-medium text-center mt-4">Olvido Su Contraseña?</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login