 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main from './pages/Home.jsx'
import Nav from './components/Navbar.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Main />
    <div style={{ paddingLeft: '15%  ' }} >
      <Contact />
    </div>
  </StrictMode>,
)
 
 