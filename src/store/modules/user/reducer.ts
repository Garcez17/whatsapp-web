/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';
import { Reducer } from 'redux';
import { UserActionTypes, UserState } from './types';

const INITAL_STATE: UserState = {
  user: null,
};

export const user: Reducer<UserState> = (state = INITAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserActionTypes.loginUser: {
        const { user } = action.payload;

        draft.user = user;

        break;
      }

      default:
        return draft;
    }
  });
};
