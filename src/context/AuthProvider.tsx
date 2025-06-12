'use client';

import React, { createContext, useContext, useState } from 'react';

// 1. Définir le type d'utilisateur
interface User {
  name: string;
  email: string;
}

// 2. Type du contexte
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// 3. Créer le contexte
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4. Créer le provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 5. Hook pratique pour accéder au contexte
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
}
