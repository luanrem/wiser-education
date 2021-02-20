import { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  password: string;
  token: string;
}

interface AuthState {
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    // const token = localStorage.getItem('@WiserEducation:token');
    // const user = localStorage.getItem('@WiserEducation:user');

    // if (token && user) {
    //   api.defaults.headers.authorization = `Bearer ${token}`;

    //   return { token, user: JSON.parse(user) };
    // }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.get('users');

    const userAuthenticated: User = response.data.forEach((element: User) => {
      if (element.email === email) {
        return element;
      }
      return null;
    });

    if (userAuthenticated === undefined) {
      console.log('Usuario nao existe');
      return;
    }

    if (userAuthenticated.password !== password) {
      console.log('Password incorreto');
      return;
    }

    // localStorage.setItem('@WiserEducation:token', token);
    // localStorage.setItem('@WiserEducation:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${userAuthenticated.token}`;

    setData({ user: userAuthenticated });
  }, []);

  const signOut = useCallback(() => {
    // localStorage.removeItem('@WiserEducation:token');
    // localStorage.removeItem('@WiserEducation:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
