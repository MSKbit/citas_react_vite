import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)

    }
  
    // return () => {
    //   second
    // }
  }, [paciente])
  

  const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now;

    return random+fecha;  
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre,propietario,email,fecha,sintomas].includes('')){
      setError(true); 
      return;
    }

    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarID()
    }

    if(paciente.id){
      objPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);
      setPacientes(pacientesActualizados);
      setPaciente({})
    }
    else{
      objPaciente.id = generarID();
      // setError(false);
      setPacientes([...pacientes, objPaciente]);
    }
    


    //Reiniciar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='mt-5 text-lg text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Adminístralos</span>
      </p>

      <form action="" onSubmit={handleSubmit} className='bg-white rounded-lg shadow-md py-5 px-5 mb-10'>
        {error && <Error mensaje='Todos los cambios son obligatorios'></Error>}
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input id='mascota' type="text" placeholder='Nombre de la Mascota' 
            value={nombre} onChange={(e) => {setNombre(e.target.value)}}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input id='propietario' type="text" placeholder='Nombre del Propietario' 
          value={propietario} onChange={(e) => {setPropietario(e.target.value)}}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input id='email' type="email" placeholder='Email del Propietario' 
          value={email} onChange={(e) => {setEmail(e.target.value)}}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input id='alta' type="date"
          value={fecha} onChange={(e) => {setFecha(e.target.value)}}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Síntomas</label>
          <textarea name="" id="sintomas" cols="30" rows="10" placeholder='Describe los síntomas'
          value={sintomas} onChange={(e) => {setSintomas(e.target.value)}}
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'></textarea>
        </div>
        <input type="submit" value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'/>
      </form>
    </div>
  )
}

export default Formulario