import { Message } from '../chat/types';
import { User } from '../user/types';

export enum GroupsActionTypes {
  addGroupToContacts = 'ADD_GROUP_TO_CONTACTS',
  setCurrentGroupChat = 'SET_CURRENT_GROUP_CHAT',
  updateGroupNotifications = 'UPDATE_GROUP_NOTIFICATIONS',
  updateGroupLastMessage = 'UPDATE_GROUP_LAST_MESSAGE',
  updateGroup = 'UPDATE_GROUP',
  removeGroup = 'REMOVE_GROUP',
}

export type Group = {
  _id: string;
  idChatRoom: string;
  idUsers: User[];
  idAdmin: string;
  idBanned: User[];
  idUsersJoinedAt: Map<string, Date>;
  idUsersLastMessage: Map<string, Date>;
  name?: string;
  isPrivate: boolean;
  createdAt: Date;
  messagesCount: number;
  userLimit: number;
  idleTime: number;
  unreadMessages: number;
  lastMessage: Message;
};

export type GroupsState = {
  groups: Group[];
  currentGroup: Group;
};
