import { Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/Cadastro.jsx'
import Login from '../pages/Login.jsx'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  )
}

export default PublicRoutes
