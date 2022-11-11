import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";




const EditarPerfil = () => {
    const { auth, actualizarPerfil } = useAuth();

    // const {email, telefono, nombre, web, id } = auth;

    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect(() => {
        setPerfil(auth)
    }, [auth])

    const handleInputChange = (e) => {
        setPerfil({
            ...perfil,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { nombre, email } = perfil

        if ([nombre, email].includes('')) {
            setAlerta({
                msg:'El nombre y el email son obligatorios',
                error: true
            })
            return
            
        }

         const resultado = await actualizarPerfil(perfil)
         setAlerta(resultado)
       

    }

    const { msg } = alerta
    

    console.log(auth)
  return (
    <>
        <AdminNav/>
        <h2 className="font-black text-3xl text-center mt-10" > Editar Perfil </h2>
        <p className="text-xl mt-5 mb-10 text-center" > Modifica tu {''}
        <span className="text-indigo-600 font-bold" >Perfil aquí </span> 
        </p>

        <div className="flex justify-center" >
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5 " >
                {
                    msg && <Alerta 
                            alerta={alerta}
                    />
                }
                <form onSubmit={handleSubmit} >
                    <div className="my-3" >
                        <label htmlFor="nombre" className="uppercase font-bold text-gray-600">Nombre </label>
                        <input
                            id="nombre"
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg "
                            name="nombre"
                            value={perfil.nombre || ''}
                            onChange={handleInputChange}
                        />
                       
                    </div>
                    
                    <div className="my-3" >
                        <label htmlFor="web" className="uppercase font-bold text-gray-600">Sitio Web </label>
                        <input
                            id="web"
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg "
                            name="web"
                            value={perfil.web || ''}
                            onChange={handleInputChange}

                        />
                       
                    </div>
                    
                    <div className="my-3" >
                        <label htmlFor="telefono" className="uppercase font-bold text-gray-600">Teléfono </label>
                        <input
                            id="telefono"
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg "
                            name="telefono"
                            value={perfil.telefono || ''}
                            onChange={handleInputChange}

                        />
                       
                    </div>
                    
                    <div className="my-3" >
                        <label htmlFor="email" className="uppercase font-bold text-gray-600">Email </label>
                        <input
                            id="email"
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg "
                            name="email"
                            value={perfil.email || ''}
                            onChange={handleInputChange}

                        />
                       
                    </div>

                    <input
                        type="submit"
                        value="Guardar Cambio"
                        className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 cursor-pointer "
                    />
                
                </form>

            </div>
        </div>
    </>
  )
}

export default EditarPerfil