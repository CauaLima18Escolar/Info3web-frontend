import { AuthProvider } from "./Auth"

const Contexts = ({ children }) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default Contexts
