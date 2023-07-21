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

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  // Crear el tablero y rellenarlo
  // Estado para guardar el click del jugador y se actualice
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)
  // null no hay ganador
  // false hay empate

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  // Poner los valores por defecto 
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    // revisamos si hay un empate si no hay
    // más espacios vacíos en el tablero
    // Si todas las posiciones del array newBoard son !== a null
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    // No actualizamos posición si ya tiene algo o tenemos un ganador
    if (board[index] || winner) return

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

    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          // square, la primera posición
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
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

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Ganó: '
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>

            </div>
          </section>
        )
      }

    </main>
  )
}

export default App
