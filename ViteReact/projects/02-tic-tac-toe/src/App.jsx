import { useState } from 'react'
import './App.css'

const TURNS = { // turnos
  X: '❌',
  O: '⚪'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  // Estamos diciendo que dependiendo del turno, cambie la clase
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    // Le pasamos el índice para saber en que casilla ha hecho click
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  // Crear el tablero y rellenarlo
  // Estado para guardar el click del jugador y se actualice
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    // No actualizamos posición si ya tiene algo
    if (board[index]) return

    // Nuevo board para cada vez que se actualice
    const newBoard = [...board]
    // spread y rest operator

    //! NO HAY QUE MUTAR NUNCA LAS PROPS NI LOS ESTADOS
    //! POR ESO SE CREA UN NUEVO BOARD

    // actualizar el tablero
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

    </main>
  )
}

export default App
