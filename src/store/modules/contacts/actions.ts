import { Message } from '../chat/types';
import { User } from '../user/types';
import { Contact, ContactsActionTypes } from './types';

export function addContact(user: User) {
  return {
    type: ContactsActionTypes.addUserToContacts,
    payload: {
      user,
    },
  };
}

export function setCurrentContact(user: User) {
  return {
    type: ContactsActionTypes.setCurrentContactChat,
    payload: {
      user,
    },
  };
}

export function updateContactStatus(user: User) {
  return {
    type: ContactsActionTypes.updateContactStatus,
    payload: {
      user,
    },
  };
}

export function updateContactNotifications(
  contact: Contact,
  unreadMessages: number,
) {
  return {
    type: ContactsActionTypes.updateContactNotifications,
    payload: {
      contact,
      unreadMessages,
    },
  };
}

export function updateContactLastMessage(
  contact_id: string,
  lastMessage: Message,
) {
  return {
    type: ContactsActionTypes.updateContactLastMessage,
    payload: {
      contact_id,
      lastMessage,
    },
  };
}
