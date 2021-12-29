import { ChatActionTypes, Message } from './types';

export function loadMessagesFromChat(messages: Message[]) {
  return {
    type: ChatActionTypes.loadMessagesFromChat,
    payload: {
      messages,
    },
  };
}

export function addMessageToChat(message: Message) {
  return {
    type: ChatActionTypes.addMessageToChat,
    payload: {
      message,
    },
  };
}

export function updateUnreadMessages(updatedMessages: Message[]) {
  return {
    type: ChatActionTypes.updateUnreadMessages,
    payload: {
      updatedMessages,
    },
  };
}

export function setRoomId(room_id: string) {
  return {
    type: ChatActionTypes.setRoomId,
    payload: {
      room_id,
    },
  };
}
