import { Route, Routes } from 'react-router-dom'
import Teste from '../pages/Teste'
import TimeLine from '../pages/Timeline'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TimeLine />} />
    </Routes>
  )
}

export default AuthRoutes
