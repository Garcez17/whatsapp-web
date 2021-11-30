import { ReactNode, useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';
import { User } from './ChatContext';

type UserContextData = {
  user: User;
  setUserProfile: (usr: User) => void;
};

export const UserContext = createContext({} as UserContextData);

type UserContextProvider = {
  children: ReactNode;
};

export function UserContextProvider({ children }: UserContextProvider) {
  const [user, setUser] = useState<User>(null);

  const setUserProfile = useCallback((usr: User) => {
    setUser(usr);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUserProfile }}>
      {children}
    </UserContext.Provider>
  );
}
