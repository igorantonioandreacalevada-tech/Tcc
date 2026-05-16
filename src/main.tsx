import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tcc from './components/Tcc.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tcc/>
  </StrictMode>,
)
