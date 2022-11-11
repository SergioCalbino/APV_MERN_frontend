import { useContext } from "react"; //Sirve para extraer los datos del Authprovide
import PacientesContext from "../context/PacientesProvider";




const usePacientes = () => {
  return useContext(PacientesContext) // En el custom hook usamos el useContext para extraer los valores del AuthContext
}

export default usePacientes