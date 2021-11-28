import { ReactNode, useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

type ChatContextData = {
  user: User;
  loadUser: (usr: User) => void;
};

export const ChatContext = createContext({} as ChatContextData);

type ChatContextProvider = {
  children: ReactNode;
};

export function ChatContextProvider({ children }: ChatContextProvider) {
  const [user, setUser] = useState<User>(null);

  const loadUser = useCallback((usr: User) => {
    setUser(usr);
  }, []);

  return (
    <ChatContext.Provider value={{ user, loadUser }}>
      {children}
    </ChatContext.Provider>
  );
}
