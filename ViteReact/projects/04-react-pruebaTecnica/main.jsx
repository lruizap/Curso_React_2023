import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'

// Solo los ficheros jsx son capaces de renderizar elementos de react
// por tanto, tendremos que cambiar la extensión del fichero

const root = createRoot(document.getElementById('app'))

root.render(
  <App />
)
