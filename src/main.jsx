import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserProvider } from './UserProvider'
import Router from './RouterComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Router/>
    </UserProvider>
  </StrictMode>,
)
