import {
  JeneseiGlobalStyles,
  JeneseiTheme
} from '@jenesei-software/jenesei-ui-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from '@app/app'

import 'react-ripple-click/dist/index.css'
import 'react-toggle/style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={JeneseiTheme}>
      <JeneseiGlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
