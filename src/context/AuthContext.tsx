import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (name: string, email: string, password: string, phone: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210'
  });

  const login = (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    setUser({
      id: '1',
      name: 'John Doe',
      email: email,
      phone: '+91 98765 43210'
    });
  };

  const logout = () => {
    setUser(null);
  };

  const signup = (name: string, email: string, password: string, phone: string) => {
    // Mock signup - in real app, this would call an API
    setUser({
      id: '1',
      name,
      email,
      phone
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};