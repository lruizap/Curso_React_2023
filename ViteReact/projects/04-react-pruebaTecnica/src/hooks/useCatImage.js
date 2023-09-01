import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// Custom Hooks
//! La lógica de la imágenes de los gatos
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

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

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
} // { imageUrl : 'https://...' }