import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocalStorage } from './useLocalStorage';

export interface User {
  id: string;
  password: string;
  nickname: string;
  gender: string;
  contact: string;
  authToken?: string;
}

export const useUser = (newUser: User) => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (newUser: User) => {
    setUser(newUser);
    setItem('user', JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem('user', '');
  };

  return { user, addUser, removeUser };
};
