import React, { useCallback, useEffect } from "react";
import AuthService from "../service/AuthService";

export const USER_PAYLOAD = "@info3web/userPayload/token";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = React.useState(null);

  useEffect(() => {
    const userData = localStorage.getItem(USER_PAYLOAD);
    if (userData) {
      setUsuario(JSON.parse(userData));
    }
  }, [])

  const login = useCallback(async (data) => {
    try {
      const response = await AuthService.login(data);
      localStorage.setItem(USER_PAYLOAD, JSON.stringify(response.data));
      setUsuario(response.data);
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
      throw error;
    }
  }, [])

  const logout = () => {
    AuthService.logout();
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        setUsuario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
