import { User, UserActionTypes } from './types';

export function loginUser(user: User) {
  return {
    type: UserActionTypes.loginUser,
    payload: {
      user,
    },
  };
}
