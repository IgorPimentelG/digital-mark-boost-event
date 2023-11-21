'use client';

import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { Auth } from '../models';

type Props = {
  children: ReactNode;
}

interface IAuthContext {
  data: Auth | null,
  isAuthenticated: boolean;
  login: (data: Auth) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  data: null,
  isAuthenticated: false,
  login: () => { },
  logout: () => { }
});

export const AuthProvider: FC<Props> = ({ children }) => {

  const [data, setData] = useState<Auth | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(data: Auth) {
    localStorage.setItem('accessToken', data.accessToken);
    setData(data);
  }

  function logout() {
    localStorage.clear();
    setData(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{
      data,
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);