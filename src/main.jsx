import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

// import { App } from './App'
import { Routes } from './routes'

import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/useCart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <Routes />
          <GlobalStyles />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
