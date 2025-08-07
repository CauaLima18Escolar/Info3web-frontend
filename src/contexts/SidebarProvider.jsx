import React from 'react'
import Sidebar from '../components/sidebar.jsx';

export const SidebarContext = React.createContext({});

const SidebarProvider = ({ children }) => {
  return (
    <SidebarContext.Provider value={{}}>
      <Sidebar />
      { children }
    </SidebarContext.Provider>
  )
}

export default SidebarProvider

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar deve ser usado dentro de um SidebarProvider");
  }
  return context;
}