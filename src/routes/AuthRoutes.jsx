import { Route, Routes } from 'react-router-dom'
import Teste from '../pages/Teste'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Teste />} />
    </Routes>
  )
}

export default AuthRoutes
