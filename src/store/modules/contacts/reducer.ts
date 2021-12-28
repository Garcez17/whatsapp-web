/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';
import { Reducer } from 'redux';
import { ContactsActionTypes, ContactsState } from './types';

const INITAL_STATE: ContactsState = {
  contacts: [],
  currentContact: null,
};

export const contacts: Reducer<ContactsState> = (
  state = INITAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ContactsActionTypes.addUserToContacts: {
        const { user } = action.payload;

        const findEqualContact = state.contacts.find(
          contact => contact._id === user._id,
        );

        if (!findEqualContact) {
          draft.contacts.push(user);
        }

        break;
      }

      case ContactsActionTypes.setCurrentContactChat: {
        const { user } = action.payload;

        draft.currentContact = user;

        break;
      }

      case ContactsActionTypes.updateContactStatus: {
        const { user } = action.payload;

        if (draft.currentContact._id === user._id) {
          draft.currentContact.is_online = user.is_online;
        }

        break;
      }

      case ContactsActionTypes.updateContactNotifications: {
        const { contact, unreadMessages } = action.payload;

        const findContactIndex = state.contacts.findIndex(
          cnt => cnt._id === contact._id,
        );

        if (findContactIndex >= 0) {
          draft.contacts[findContactIndex].unreadMessages = unreadMessages;
        }

        break;
      }

      case ContactsActionTypes.updateContactLastMessage: {
        const { contact, lastMessage } = action.payload;

        const findContactIndex = state.contacts.findIndex(
          cnt => cnt._id === contact._id,
        );

        if (findContactIndex >= 0) {
          draft.contacts[findContactIndex].lastMessage = lastMessage;
        }

        break;
      }

      default:
        return draft;
    }
  });
};
