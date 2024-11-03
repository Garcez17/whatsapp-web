/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';
import { Reducer } from 'redux';
import { GroupsActionTypes, GroupsState } from './types';

const INITAL_STATE: GroupsState = {
  groups: [],
  currentGroup: null,
};

export const groups: Reducer<GroupsState> = (state = INITAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GroupsActionTypes.addGroupToContacts: {
        const { group } = action.payload;

        const findEqualGroup = state.groups.find(
          room => room._id === group._id,
        );

        if (!findEqualGroup) {
          draft.groups.push(group);
        }

        break;
      }

      case GroupsActionTypes.setCurrentGroupChat: {
        const { group } = action.payload;

        draft.currentGroup = group;

        break;
      }

      case GroupsActionTypes.updateGroupNotifications: {
        // const { contact, unreadMessages } = action.payload;

        // const findContactIndex = state.groups.findIndex(
        //   cnt => cnt._id === contact._id,
        // );

        // if (findContactIndex >= 0) {
        //   draft.groups[findContactIndex].unreadMessages = unreadMessages;
        // }

        break;
      }

      case GroupsActionTypes.updateGroupLastMessage: {
        const { group_id, lastMessage } = action.payload;

        const findGroupIndex = state.groups.findIndex(
          group => group._id === group_id,
        );

        if (findGroupIndex >= 0) {
          draft.groups[findGroupIndex].lastMessage = lastMessage;
        }

        break;
      }

      default:
        return draft;
    }
  });
};
