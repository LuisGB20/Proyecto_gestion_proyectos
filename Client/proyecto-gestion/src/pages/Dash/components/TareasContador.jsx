

function Tareas() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row p-5">
        {/* Tarea Asignada */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-500 h-32 w-full lg:w-72 text-white rounded-2xl p-6 mb-5 lg:mr-5 lg:mb-0">
          <h1 className="flex justify-start">Tareas Asignadas</h1>
          {/* Agrega el contenido específico de Tareas Asignadas aquí */}
          <p className="text-3xl justify-start flex">3</p>
        </div>
        
        {/* Tareas Cumplidas */}
        <div className="bg-white h-32 w-full lg:w-72 rounded-2xl p-6 mb-5 lg:mr-5 lg:mb-0">
          <h1 className="flex justify-start">Tareas Cumplidas</h1>
          {/* Agrega el contenido específico de Tareas Cumplidas aquí */}
          <p className="text-3xl justify-start flex">1</p>
        </div>
        
        {/* Tareas Pendientes */}
        <div className="bg-white h-32 w-full lg:w-72 rounded-2xl p-6 mb-5 lg:mr-5 lg:mb-0">
          <h1 className="flex justify-start">Tareas Pendientes</h1>
          {/* Agrega el contenido específico de Tareas Pendientes aquí */}
          <p className="text-3xl justify-start flex">2</p>
        </div>
        
        {/* Próxima fecha de entrega */}
        <div className="bg-white h-32 w-full lg:w-72 rounded-2xl p-6">
          <h1 className="flex justify-start">Proxima fecha de entrega</h1>
          {/* Agrega el contenido específico de la Próxima fecha de entrega aquí */}
          <p className="text-xl justify-start flex">30-Ene-24</p>
        </div>
      </div>
    </div>
  );
}

export default Tareas;
