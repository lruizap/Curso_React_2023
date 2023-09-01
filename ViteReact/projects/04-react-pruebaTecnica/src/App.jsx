import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import { Otro } from './Components/Otro.jsx'

export function App() {

  const { fact, refreshRandomFact } = useCatFact()
  // Este fact que pasamos por parámetro es el fact que obtenemos de arriba
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for "${fact}"`} />}
    </main>
  )
  // renderizado condicional
}