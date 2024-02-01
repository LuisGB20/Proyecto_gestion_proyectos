

function ListaTareas() {
    return (
      <div className="p-5 flex flex-col">
        {/* Mis Tareas */}
        <div className="bg-white h-52 w-full mb-5 mt-2 p-4  rounded-2xl">
          <h1 className="text-xl mb-5">Miembros del equipo</h1>
          <table>
            <thead>
              <tr>
                <th>Miembro</th>
                <th className="pl-12">Rol</th>
                <th className="pl-10">Estatus</th>
              </tr>
            </thead>
            <tbody>
              {/* Agrega filas específicas para Mis Tareas aquí */}
              <tr>
                <td>Luis Gomez</td>
                <td className="text-center pl-12">Diseñador</td>
                <td className="text-blue-500 pl-10">En proceso</td>
              </tr>
              <tr>
                <td>Delanni Teodoro</td>
                <td className="text-center pl-12">Programador</td>
                <td className="pl-10">Pendiente</td>
              </tr>
              <tr>
                <td>Misael Rosado</td>
                <td className="text-center pl-12">Analista</td>
                <td className="pl-10">Completado</td>
              </tr>
              <tr>
                <td>Miguel Bolon</td>
                <td className="text-center pl-12">Programador</td>
                <td className="pl-10">Completado</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Tareas Realizadas */}
        <div className="bg-white h-52 w-full mt-2 p-4 rounded-2xl">
          <h1 className="text-xl mb-5">Tareas Realizadas</h1>
          <table>
            <thead>
              <tr>
                <th>Tarea</th>
                <th className="pl-10">Fecha de entrega</th>
              </tr>
            </thead>
            <tbody>
              {/* Agrega filas específicas para Tareas Realizadas aquí */}
              <tr>
                <td>Diseño Home</td>
                <td className="pl-10">12-Ene-24</td>
              </tr>
              <tr>
                <td>Diseño Login</td>
                <td className="pl-10">18-Ene-24</td>
              </tr>
              <tr>
                <td>Diseño Registro</td>
                <td className="pl-10">20-Ene-24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default ListaTareas;
  