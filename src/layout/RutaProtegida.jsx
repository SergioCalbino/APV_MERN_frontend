import { Outlet, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {

     const { auth, cargando } = useAuth()
     if(cargando) return 'Cargando...'
    //  console.log(auth)
    //  console.log(cargando)

  return (
    <>
    

        <Header/>
            { auth?._id ? (
                <main className="container mx-auto mt-10" >
                <Outlet /> 

                </main> 
                ) : <Navigate to='/'/> }
        <Footer/>
      
    </>
  );
};

export default RutaProtegida;
