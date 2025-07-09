import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './hello.css'
import App from './App.jsx'
import Hello from './hello.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <Hello />
  </StrictMode>,
)
