import { ReactNode, useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  socket_id: string;
  is_online: boolean;
};

type ChatContextData = {
  currentUserChat: User;
  chats: User[];
  loadUser: (usr: User) => void;
  loadUsers: (users: User[]) => void;
};

export const ChatContext = createContext({} as ChatContextData);

type ChatContextProvider = {
  children: ReactNode;
};

export function ChatContextProvider({ children }: ChatContextProvider) {
  const [currentUserChat, setCurrentUserChat] = useState<User>(null);
  const [chats, setChats] = useState<User[]>([]);

  const loadUser = useCallback((usr: User) => {
    setCurrentUserChat(usr);
  }, []);

  const loadUsers = useCallback((users: User[]) => {
    setChats(users);
  }, []);

  return (
    <ChatContext.Provider
      value={{ currentUserChat, loadUser, loadUsers, chats }}
    >
      {children}
    </ChatContext.Provider>
  );
}
