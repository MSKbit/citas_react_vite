import { useState, useEffect } from "react"
import Formulario from "../components/Formulario"
import Header from "../components/Header"
import ListadoPacientes from "../components/ListadoPacientes"



function App() {
  
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    // console.log('Eliminando Paciente', id);
    const pacientesFiltrados = pacientes.filter((paciente)=>{
      return paciente.id !== id;
    })

    setPacientes(pacientesFiltrados);
  }

  useEffect(() => {
    const getLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }

    getLocalStorage();
  }, [])
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}></Formulario>
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}></ListadoPacientes>
      </div>
      
    </div>
  )
}

export default App
