import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const eliminarPaciente = (id) => {
    const pacientesActuaizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActuaizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
      />
      </div>
    </div>
  )
}

export default App
