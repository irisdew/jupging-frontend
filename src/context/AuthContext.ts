import { createContext, useState } from 'react';
import { User } from '../hooks/useUser';

interface AuthContext {
  user: User | null;
  login: (user: User | null, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  login: () => {},
  logout: () => {},
});

// const AuthProvider({children} :  {children: React.ReactNode}) {
//   const [user, setUser] = useState<User>(null);

//   const login = () => {

//   }
// }
