// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Burada istediğiniz tüm global state'leri ve fonksiyonları tanımlayabilirsiniz
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <AppContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);