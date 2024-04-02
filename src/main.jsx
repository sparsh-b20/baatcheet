import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ChakraProvider} from '@chakra-ui/react'
import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from './theme'
import Login from './components/Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    <ChakraProvider theme={theme}> 
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
    </ChakraProvider>
    </React.StrictMode>,
)
