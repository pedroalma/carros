import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Garagem from './components/garagem'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Garagem />
  </StrictMode>,
)
