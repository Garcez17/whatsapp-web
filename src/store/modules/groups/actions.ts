import { Message } from '../chat/types';
import { Group, GroupsActionTypes } from './types';

export function addGroup(group: Group) {
  return {
    type: GroupsActionTypes.addGroupToContacts,
    payload: {
      group,
    },
  };
}

export function updateGroupLastMessage(group_id: string, lastMessage: Message) {
  return {
    type: GroupsActionTypes.updateGroupLastMessage,
    payload: {
      group_id,
      lastMessage,
    },
  };
}

export function removeGroup(group_id: string) {
  return {
    type: GroupsActionTypes.removeGroup,
    payload: {
      group_id,
    },
  };
}

export function updateGroup(group_id: string, group: Group) {
  return {
    type: GroupsActionTypes.updateGroup,
    payload: {
      group_id,
      group,
    },
  };
}

export function setCurrentGroup(group: Group) {
  return {
    type: GroupsActionTypes.setCurrentGroupChat,
    payload: {
      group,
    },
  };
}
