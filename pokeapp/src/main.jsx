import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import '@fontsource/raleway/400.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
