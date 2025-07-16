import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cadastro from './Cadastro.jsx'

createRoot(document.getElementById('root')).render(
    <Cadastro />,
)
