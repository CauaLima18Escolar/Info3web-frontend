import { BrowserRouter } from 'react-router-dom'
import { useAuth } from './contexts/Auth'
import PublicRoutes from './routes/PublicRoutes'
import AuthRoutes from './routes/AuthRoutes'
import SidebarProvider from './contexts/SidebarProvider'

const App = () => {
  const { usuario } = useAuth()

  return (
    <BrowserRouter>
      { usuario 
      ? (
        <SidebarProvider>
          <AuthRoutes /> 
        </SidebarProvider>
      )
      : <PublicRoutes /> }
    </BrowserRouter>
  )
}

export default App
