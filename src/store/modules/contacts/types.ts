import { Message } from '../chat/types';
import { User } from '../user/types';

export enum ContactsActionTypes {
  addUserToContacts = 'ADD_USER_TO_CONTACTS',
  addGroupToContacts = 'ADD_GROUP_TO_CONTACTS',
  setCurrentContactChat = 'SET_CURRENT_CONTACT_CHAT',
  updateContactStatus = 'UPDATE_CONTACT_STATUS',
  updateContactNotifications = 'UPDATE_CONTACT_NOTIFICATIONS',
  updateContactLastMessage = 'UPDATE_CONTACT_LAST_MESSAGE',
}

export interface Contact extends User {
  unreadMessages: number;
  lastMessage: Message;
}

export interface ChatContactData {
  contact: Contact;
  lastMessage: Message;
  unreadMessages: number;
}

export type ContactsState = {
  contacts: Contact[];
  currentContact: Contact;
};
