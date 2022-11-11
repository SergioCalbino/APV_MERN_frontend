import { Outlet } from 'react-router-dom';

const AuthLayout = () => {

    //El oulet inyecta el login en el layout. Hay que configurar en las rutas eso. Poner login como hijo del layout
  return (
    <>
        
          
        <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center " >
          <Outlet/> 
        </main>
    </>
  )
}

export default AuthLayout