import { User } from '../user/types';
import { ContactsActionTypes } from './types';

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
