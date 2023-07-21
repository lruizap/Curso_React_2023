export const Square = ({ children, isSelected, updateBoard, index }) => {
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