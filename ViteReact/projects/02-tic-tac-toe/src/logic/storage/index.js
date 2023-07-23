export const saveGameToStorage = ({ board, turn }) => {
  // guardar partida
  // El localStorage lo que guara es un string
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  // Es buena práctica borrar específicamente 
  // lo que queremos borrar del local storage
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')

}