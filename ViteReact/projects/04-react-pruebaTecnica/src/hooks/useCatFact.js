import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact() {
  const [fact, setFact] = useState()

  // fetch por defecto, sin usar dependencias u otras tecnologías
  //! Recupera citas al recargar la página

  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshRandomFact, [])
  // La primera vez que se ejecute nuestro componente
  // Por lo tanto, el array de datos debe estar vacío

  return { fact, refreshRandomFact }
}