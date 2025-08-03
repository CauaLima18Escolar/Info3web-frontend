import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './pages/Cadastro.jsx'
import Login from './pages/Login.jsx'
import SidebarTest from './sidebarTest.jsx'


const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/cadastro",
            element:<Cadastro/>
        },
        {
            path:"/home",
            element:<SidebarTest/>
        },
        {
            path:"/galeria",
            element:<SidebarTest/>
        },
        {
            path:"/turma",
            element:<SidebarTest/>
        },
        {
            path:"/perfil",
            element:<SidebarTest/>
        },
    ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router } /> 
  </StrictMode>,
)
