import { createContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { API_URL } from '../config/index';

interface AppContextInterface {
  user: user | null;
  error: string | null;
  register: (user: user) => void;
  login: (user: user) => void;
  logout: () => void;
}

type ProviderProps = {
  children: ReactNode;
};

type user = {
  username?: string;
  email: string;
  password: string;
};

const defaultValue = {
  user: null,
  error: null,
};

const AuthContext = createContext<AppContextInterface>(
  defaultValue as AppContextInterface
);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Register a user
  const register = async (user: user): Promise<void> => {
    // {username, email, password}
    console.log(user);
  };

  // Login user
  const login = async ({
    email: identifier,
    password,
  }: user): Promise<void> => {
    console.log(identifier, password);
  };

  // Logout user
  const logout = async (): Promise<void> => {
    console.log('Logout');
  };

  // Check is the user is logged in
  const checkUserLoggedIn = async (user: user): Promise<void> => {
    console.log('Check');
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
