import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Wrap App with BrowserRouter */}
    <BrowserRouter basename="/admin-dashboard-ui">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
