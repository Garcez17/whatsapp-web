import { combineReducers } from 'redux';

import { user } from './user/reducer';
import { UserState } from './user/types';

import { contacts } from './contacts/reducer';
import { ContactsState } from './contacts/types';

import { chat } from './chat/reducer';
import { ChatState } from './chat/types';

export type State = {
  user: UserState;
  contacts: ContactsState;
  chat: ChatState;
};

export default combineReducers({
  user,
  contacts,
  chat,
});
