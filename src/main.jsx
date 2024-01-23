import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

// import { App } from './App'
import { Routes } from './routes'

import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
