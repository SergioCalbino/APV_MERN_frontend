import { useContext } from "react"; //Sirve para extraer los datos del Authprovide
import AuthContext from "../context/AuthProvider";




const useAuth = () => {
  return useContext(AuthContext) // En el custom hook usamos el useContext para extraer los valores del AuthContext
}

export default useAuth