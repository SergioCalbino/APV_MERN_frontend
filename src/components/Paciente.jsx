import usePacientes from "../hooks/usePacientes";




const Paciente = (paciente) => { // Estas props vienen de listado

    const { setEdicion, eliminarPaciente } = usePacientes()

const {nombre, _id, email, fecha, veterinario, propietario, sintomas} = paciente;

const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-AR', {dateStyle: 'long'}).format(nuevaFecha)

}

  return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl" > 
            <p className="font-bold uppercase text-indigo-600" >Nombre: {''}
                <span className="font-normal normal-case text-black" >{nombre}</span>
            </p>
            <p className="font-bold uppercase text-indigo-600" >Propietario: {''}
                <span className="font-normal normal-case text-black" >{propietario}</span>
            </p>
            <p className="font-bold uppercase text-indigo-600" >Email Contacto: {''}
                <span className="font-normal normal-case text-black" >{email}</span>
            </p>
            <p className="font-bold uppercase text-indigo-600" >Fecha de Alta: {''}
                <span className="font-normal normal-case text-black" >{formatearFecha(fecha)}</span>
            </p>
            <p className="font-bold uppercase text-indigo-600" >Sintomas: {''}
                <span className="font-normal normal-case text-black" >{sintomas}</span>
            </p>

            <div className="flex justify-between my-5" >
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => {setEdicion(paciente)}}
                >
                    editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => {eliminarPaciente(_id)}}
                >
                    eliminar
                </button>

            </div>

        </div>
  )
}

export default Paciente