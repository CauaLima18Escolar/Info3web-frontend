import { Route, Routes } from 'react-router-dom'
import TimeLine from '../pages/Timeline'
import Turma from '../pages/Turma'
import Perfil from '../pages/Perfil'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TimeLine />} />
      <Route path="/turma" element={<Turma />} />
      <Route path='/perfil' element={<Perfil/>} />
    </Routes>
  )
}

export default AuthRoutes
