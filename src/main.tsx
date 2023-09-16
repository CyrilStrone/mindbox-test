import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app/app'

import './styles/index.css'
import './styles/fonts.css'
import './styles/variables.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
