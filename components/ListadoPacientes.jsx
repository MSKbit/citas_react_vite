import Paciente from "./Paciente"
// import { useEffect } from "react"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  // useEffect(() => {
  //   if(pacientes.length > 0)
  //     console.log('Nuevo Paciente desde listado pacientes');
  
  //   // return () => {
  //   //   second
  //   // }
  // }, [pacientes])
  

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
         <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => {
            return <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}></Paciente>
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Comienza Agregando Pacientes {''}
              <span className="text-indigo-600 font-bold">Y se mostrarán aquí</span>
          </p>
        </>
      )}
     
      

    </div>
  )
}

export default ListadoPacientes