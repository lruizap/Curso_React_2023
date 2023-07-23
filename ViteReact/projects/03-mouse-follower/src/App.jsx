import { useEffect, useState } from "react"

const FollowMouse = () => {
  // Estado para activar o desactivar el efecto
  const [enabled, setEnabled] = useState(false)
  // Guardamos la posición
  //* Es buena práctica inicializar el estado con el tipo de dato
  //* que vamos a trabajar
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Este efecto (función), se ejecuta cada vez
  // que cambie el parámetro (los que se encuentran dentro del array)
  // El useEffect está compuesto por una función y los parámetros que cambian
  //! useEffect(funcion(), [parametros, que, cambian])
  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    // Podemos hacer lógica dentro de un efecto dependiendo del valor de
    // nuestras dependencias
    //! Nunca podremos meter dentro de un condicional un hook
    if (enabled) {
      // Este evento detecta el valor del eje x e y del ratón
      // cuándo este se mueve
      window.addEventListener('pointermove', handleMove)
    }

    // Esto se ejecuta cada vez que se desmonta el componente
    // o cada vez que cambie la dependencia
    // cleanup
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  return (
    <>
      <div style={{
        position: "absolute",
        backgroundColor: '#09f',
        borderRadius: '50px',
        opacity: .8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir Puntero
      </button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(false)

  return (
    <main>
      <h1>FollowMouse</h1>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Renderizar el componente FollowMouse
      </button>
    </main>
  )
}

export default App
