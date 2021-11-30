import { ReactNode, useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';
import { User } from './ChatContext';

export type Message = {
  _id: string;
  to: User;
  text: string;
  created_at: Date;
  room_id: string;
  read: boolean;
};

type RoomContextData = {
  messages: Message[];
  roomId: string;
  loadMessages: (msgs: Message[]) => void;
  insertMessage: (msg: Message) => void;
  insertRoomId: (room_id: string) => void;
};

export const RoomContext = createContext({} as RoomContextData);

type RoomContextProviderProps = {
  children: ReactNode;
};

export function RoomContextProvider({ children }: RoomContextProviderProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [roomId, setRoomId] = useState<string>(null);

  const loadMessages = useCallback((msgs: Message[]) => {
    setMessages(msgs);
  }, []);

  const insertMessage = useCallback((msg: Message) => {
    setMessages(oldState => [...oldState, msg]);
  }, []);

  const insertRoomId = useCallback((room_id: string) => {
    setRoomId(room_id);
  }, []);

  return (
    <RoomContext.Provider
      value={{ messages, roomId, insertMessage, insertRoomId, loadMessages }}
    >
      {children}
    </RoomContext.Provider>
  );
}
