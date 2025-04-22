import './@config/styles/globals.css'
import '@vime/core/themes/default.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
