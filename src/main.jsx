import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './Cadastro.jsx'
import Login from './Login.jsx'

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/cadastro",
            element:<Cadastro/>
        }
    ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router } /> 
  </StrictMode>,
)
