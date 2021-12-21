import { User } from '../user/types';

export enum ChatActionTypes {
  loadMessagesFromChat = 'LOAD_MESSAGES_FROM_CHAT',
  addMessageToChat = 'ADD_MESSAGE_TO_CHAT',
  setRoomId = 'SET_ROOM_ID',
}

export type Message = {
  _id: string;
  to: User;
  text: string;
  created_at: Date;
  room_id: string;
  read: boolean;
};

export type ChatState = {
  messages: Message[];
  roomId: string;
};
