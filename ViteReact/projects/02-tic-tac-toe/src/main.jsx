import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <h2>Al reiniciar la ventana, se guarda la partida</h2>
  </React.StrictMode>,
)