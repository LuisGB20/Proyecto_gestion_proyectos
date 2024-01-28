
import Logo from '../../IMG/logo.png'
import { Link } from "react-router-dom";

function Register() {
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
                    <div className="flex justify-center items-center flex-col">
                        <form>
                            <div>
                                <h3 className="mb-1">Correo electronido</h3>
                                <input
                                    required
                                    type="text"
                                    placeholder="gomez@gmail.com"
                                    className="bg-slate-100 w-96 h-10 rounded-xl pl-5 mb-4"
                                />
                            </div>
                            <div className="grid grid-cols-2 ml-3">
                                <div>
                                    <h3>Primer Nombre</h3>
                                    <input
                                        required
                                        placeholder="Luis"
                                        type="text"
                                        className="bg-slate-100 w-44 h-10 rounded-xl pl-5 mb-4"
                                    />
                                </div>
                                <div>
                                    <h3>Segundo Nombre</h3>
                                    <input
                                        required
                                        placeholder="Alberto"
                                        type="text"
                                        className="bg-slate-100 w-44 h-10 rounded-xl pl-5 mb-4"
                                    />
                                </div>
                                <div>
                                    <h3>Crear Contraseña</h3>
                                    <input
                                        required
                                        placeholder="********"
                                        type="password"
                                        className="bg-slate-100 w-44 h-10 rounded-xl pl-5 mb-4"
                                    />
                                </div>
                                <div>
                                    <h3>Confirmar Contraseña</h3>
                                    <input
                                        required
                                        placeholder="********"
                                        type="password"
                                        className="bg-slate-100 w-44 h-10 rounded-xl pl-5 mb-4"
                                    />
                                </div>
                            </div>
                        </form>
                        <div>
                            <button className="bg-gradient-to-r from-blue-900 to-blue-500 text-white w-80 h-10 rounded-xl">Crear Cuenta</button>
                            <p className="text-center mt-3">¿Ya tienes cuenta? 
                                <Link to='/Login'>
                                    <span className="text-blue-400 ml-2">Iniciar Sesion</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register