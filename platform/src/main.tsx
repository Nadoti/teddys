import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './router/Router'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <Router />
  </React.StrictMode>,
)
