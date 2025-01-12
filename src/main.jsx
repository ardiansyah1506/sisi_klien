import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/authContext.jsx'
import { NotifContextProvider } from './context/notifContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { ModeContextProvider } from './context/modeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <NotifContextProvider>
      <ModeContextProvider>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </ModeContextProvider>
      </NotifContextProvider>
    </AuthContextProvider>
  </StrictMode>
);