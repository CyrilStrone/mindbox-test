import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from '@app/app'

import '@styles/fonts.css'

import { Theme } from '@theme/theme'
import { GlobalStyles } from '@theme/theme.global'

import 'react-json-view-lite/dist/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
