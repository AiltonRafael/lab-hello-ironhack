import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from './styles/theme.js'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider CSSReset theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
