import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
import { checkWinner, checkEndGame } from './logic/board.js'
import { TURNS } from './constants.js'
import './App.css'


function App() {
  // Crear el tablero y rellenarlo
  // Estado para guardar el click del jugador y se actualice
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)
  // null no hay ganador
  // false hay empate

  // Poner los valores por defecto 
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
      confetti()
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

      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />

    </main>
  )
}

export default App
