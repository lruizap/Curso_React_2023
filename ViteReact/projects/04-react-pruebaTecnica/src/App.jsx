import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {

  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState('no')

  // fetch por defecto, sin usar dependencias u otras tecnologías
  //! Recupera citas al recargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])
  // La primera vez que se ejecute nuestro componente
  // Por lo tanto, el array de datos debe estar vacío

  //! Recupera la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    // Si no tenemos un fact, termina la ejecución del efecto
    if (!fact) return

    // const firstThreeWord = fact.split(' ').slice(0, 3).join(' ')
    // const firstWord = fact.split(' ')[0]
    const firstThreeWords = fact.split(' ', 3).join(' ')
    console.log(firstThreeWords)

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`) // json = true
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for "${fact}"`} />}
    </main>
  )
  // renderizado condicional
}