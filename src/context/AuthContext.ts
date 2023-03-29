import { createContext } from 'react';
import { User } from '../hooks/useUser';

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
});
