import { User } from '../user/types';

export enum ContactsActionTypes {
  addUserToContacts = 'ADD_USER_TO_CONTACTS',
  setCurrentContactChat = 'SET_CURRENT_CONTACT_CHAT',
  updateContactStatus = 'UPDATE_CONTACT_STATUS',
}

export type ContactsState = {
  contacts: User[];
  currentContact: User;
};
