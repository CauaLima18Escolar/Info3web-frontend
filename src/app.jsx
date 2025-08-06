import { BrowserRouter } from 'react-router-dom'
import { useAuth } from './contexts/Auth'
import PublicRoutes from './routes/PublicRoutes'
import AuthRoutes from './routes/AuthRoutes'

const App = () => {
  const { usuario } = useAuth()
  console.log('Usuário autenticado:', usuario)

  return (
    <BrowserRouter>
      { usuario ? <AuthRoutes /> : <PublicRoutes /> }
    </BrowserRouter>
  )
}

export default App
