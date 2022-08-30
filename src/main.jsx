import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap'
import 'bootswatch/dist/minty/bootstrap.min.css'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import Paths from './routes/Routes'
import { SesionCartProvider } from './contexts/SesionCartContext'
import { AuthProvider } from './contexts/Auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SesionCartProvider>
        <AuthProvider>
          <Paths />
        </AuthProvider>
      </SesionCartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
