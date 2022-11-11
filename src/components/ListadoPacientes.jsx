import usePacientes from "../hooks/usePacientes"
import  Paciente  from './Paciente'

const ListadoPacientes = () => {

  
  const { pacientes } = usePacientes()
  console.log(pacientes)

  return (
    <>
      { pacientes.length ? 
      
      (
        <>
            <h2 className="font-black text-3xl text-center" > Listado Pacientes </h2>

              <p className="text-xl mt-5 mb-10 text-center " >
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold" > Pacientes y citas </span>
              </p>

              { pacientes.map(( paciente, idx) => {
               // const { nombre, _id, propietario, veterinario, email, fecha } = paciente
               
                return (
                  
                  <Paciente
                    key={idx} 
                    {...paciente}
                  />
                )
              }) }
        </>
      ) : 
      (
        <>
            <h2 className="font-black text-3xl text-center" > No hay pacientes </h2>

            <p className="text-xl mt-5 mb-10 text-center " >
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold" > y apareceran en este lugar </span>
            </p>
        </>
        
        )}
    </>
  )
}

export default ListadoPacientes