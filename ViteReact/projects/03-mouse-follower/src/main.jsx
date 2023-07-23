import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode sirve para ver los problemas
  // que hay durante el desarrollo.
  // En producción no ocurre, lo ignora
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
