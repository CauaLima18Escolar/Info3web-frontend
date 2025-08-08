import { Route, Routes } from 'react-router-dom'
import TimeLine from '../pages/Timeline'
import Turma from '../pages/Turma'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TimeLine />} />
      <Route path="/turma" element={<Turma />} />
    </Routes>
  )
}

export default AuthRoutes
