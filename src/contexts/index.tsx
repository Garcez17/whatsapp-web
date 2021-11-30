import { ReactNode } from 'react';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ChatContextProvider } from './ChatContext';
import { UserContextProvider } from './UserContext';
import { RoomContextProvider } from './RoomContext';

interface AppProviderProps {
  children: ReactNode;
  session: any;
}

export function AppProvider({ children, session }: AppProviderProps) {
  return (
    <NextAuthProvider session={session}>
      <UserContextProvider>
        <ChatContextProvider>
          <RoomContextProvider>{children}</RoomContextProvider>
        </ChatContextProvider>
      </UserContextProvider>
    </NextAuthProvider>
  );
}
