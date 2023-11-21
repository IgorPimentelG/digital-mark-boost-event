'use client';

import Cookies from 'js-cookie';
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
    const token = data.accessToken;
    Cookies.set('accessToken', token);
    setIsAuthenticated(true);
    setData(data);
  }

  function logout() {
    Cookies.remove('accessToken');
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
};

export const useAuthContext = () => useContext(AuthContext);