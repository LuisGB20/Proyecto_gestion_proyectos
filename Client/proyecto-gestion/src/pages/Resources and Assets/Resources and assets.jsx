import { Link } from 'react-router-dom';
import Objeto from '../../IMG/OBJECTS.png';
import Assets from '../../IMG/activo.png';
import Resources from '../../IMG/recurso.png';

function ResourcesAndAssets() {
  return (
    <div>
      <div className="bg-slate-200 flex items-center justify-center h-screen">
        <div className="bg-white sm:w-11/12 lg:w-2/3 2xl:w-1/3 h-[80%] sm:h-4/5 lg:h-[70%] rounded-xl grid place-content-center shadow-xl">
          <button className="bg-gradient-to-r from-blue-900 to-blue-500 text-white h-10 w-28 rounded-lg absolute ml-5 mt-5 sm:ml-2 sm:mt-2">
            Atras
          </button>
          <div className="flex justify-center items-center flex-col">
            <img src={Objeto} alt="" className="h-32 mb-5" />
            <h1 className="font-bold text-xl mb-5">Solicitud De Recursos Y/O Activos</h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4 ">
            <Link to="/SolicitudActivos">
              <button className="flex justify-center items-center flex-col border-2 h-32 w-full sm:w-72 rounded-2xl hover:border-blue-400 sm:ml-0 sm:mt-0 sm:mr-4">
                <div className="flex items-center">
                  <img src={Assets} alt="" className="h-6" />
                  <h3 className="ml-2 text-xl">Activos</h3>
                </div>
                <p>Solicita activos y evalúalos</p>
              </button>
            </Link>
            <Link to="/SolicitudRecursos">
              <button className="flex justify-center items-center flex-col border-2 h-32 w-full sm:w-72 mt-4 sm:mt-0 rounded-2xl hover:border-blue-400">
                <div className="flex items-center">
                  <img src={Resources} alt="" className="h-6" />
                  <h3 className="ml-3 text-xl">Recursos</h3>
                </div>
                <p>Solicita recursos y evalúalos</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesAndAssets;
