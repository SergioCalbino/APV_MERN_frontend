import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';
import Login from './paginas/Login';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import OlvidePassword from './paginas/OlvidePassword';
import Registrar from './paginas/Registrar';
import NuevoPassword from './paginas/NuevoPassword';
import AdministrarPacientes from './paginas/AdministrarPacientes';


import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';
import EditarPerfil from './paginas/EditarPerfil';
import CambiarPassword from './paginas/CambiarPassword';

//El layout es la ruta principal donde se muestra todo. El login es el indice, por eso se muestra primero y se define con index- El resto de las rutas no es neceasrio poner '/' porque ya asume que es/registrar, /olvide...
function App() {

 
 

  return (
    
  <BrowserRouter>
    <AuthProvider>
        <PacientesProvider>
            <Routes>
                <Route path='/' element={<AuthLayout/>} > 
                    <Route index element={<Login/>} />
                    <Route path='registrar' element={<Registrar/>} />
                    <Route path='olvide-password' element={<OlvidePassword/>} />
                    <Route path='olvide-password/:token' element={<NuevoPassword/>} />
                    <Route path='confirmar/:id' element={<ConfirmarCuenta/>} />
                </Route>
                
                {/* Estas con todas las rutas protegidas  */}
                <Route path='/admin' element={ <RutaProtegida/> } >
                    <Route index element={<AdministrarPacientes/>} />
                    <Route path='perfil' element={<EditarPerfil/>}  />
                    <Route path='cambiar-password' element={<CambiarPassword/>}  />
                </Route>

            </Routes>
        </PacientesProvider>
      </AuthProvider>
  </BrowserRouter>
  )
}

export default App
