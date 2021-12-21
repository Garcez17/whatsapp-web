/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';
import { Reducer } from 'redux';
import { ChatActionTypes, ChatState } from './types';

const INITAL_STATE: ChatState = {
  messages: [],
  roomId: null,
};

export const chat: Reducer<ChatState> = (state = INITAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ChatActionTypes.loadMessagesFromChat: {
        const { messages } = action.payload;

        draft.messages = messages;

        break;
      }

      case ChatActionTypes.addMessageToChat: {
        const { message } = action.payload;

        const findEqualMessage = state.messages.find(
          msg => msg._id === message._id,
        );

        if (!findEqualMessage) {
          draft.messages.push(message);
        }

        break;
      }

      case ChatActionTypes.setRoomId: {
        const { room_id } = action.payload;

        draft.roomId = room_id;

        break;
      }

      default:
        return draft;
    }
  });
};
