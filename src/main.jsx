import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './app.jsx'
import { NotificationProvider } from './components/Notification'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider>
      <Portfolio />
    </NotificationProvider>
  </React.StrictMode>,
)